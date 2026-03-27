const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

// ================= DATABASE =================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.log("DB Error:", err);
    process.exit(1);
  });

// ================= MODELS =================
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const reviewSchema = new mongoose.Schema({
  email: String,
  movieId: Number,
  title: String,
  image: String,
  releaseDate: String,
  rating: String,
  review: String
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

// ================= AUTH =================
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    await new User({ username, email, password }).save();
    res.json({ message: "Signup success" });
  } catch (err) {
    console.log("Signup error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid login" });
    }

    res.json({
      user: {
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.log("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

// ================= REVIEWS =================
app.post("/reviews", async (req, res) => {
  try {
    const { email, movieId, title, image, releaseDate, rating, review } = req.body;

    await Review.findOneAndUpdate(
      { email, movieId: Number(movieId) },
      {
        email,
        movieId: Number(movieId),
        title,
        image,
        releaseDate,
        rating,
        review
      },
      { upsert: true, new: true }
    );

    res.json({ message: "Saved" });
  } catch (err) {
    console.log("Review save error:", err);
    res.status(500).json({ error: "Review save failed" });
  }
});

app.post("/reviews/delete", async (req, res) => {
  try {
    const { email, movieId } = req.body;

    await Review.findOneAndDelete({
      email,
      movieId: Number(movieId)
    });

    res.json({ message: "Deleted" });
  } catch (err) {
    console.log("Delete error:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});

app.get("/reviews/:email", async (req, res) => {
  try {
    const data = await Review.find({ email: req.params.email }).sort({ updatedAt: -1, createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.log("Fetch reviews error:", err);
    res.status(500).json({ error: "Could not fetch reviews" });
  }
});

app.get("/movie-reviews/:movieId", async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: Number(req.params.movieId) }).sort({ updatedAt: -1, createdAt: -1 });

    const counts = {
      Skip: 0,
      Timepass: 0,
      "Go for it": 0,
      Perfection: 0
    };

    reviews.forEach((r) => {
      if (counts[r.rating] !== undefined) counts[r.rating]++;
    });

    res.json({
      total: reviews.length,
      counts,
      reviews
    });
  } catch (err) {
    console.log("Movie reviews error:", err);
    res.status(500).json({ error: "Could not fetch movie reviews" });
  }
});

app.get("/my-review/:email/:movieId", async (req, res) => {
  try {
    const data = await Review.findOne({
      email: req.params.email,
      movieId: Number(req.params.movieId)
    });

    res.json(data || null);
  } catch (err) {
    console.log("My review error:", err);
    res.status(500).json({ error: "Could not fetch review" });
  }
});

// ================= ROOT =================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});