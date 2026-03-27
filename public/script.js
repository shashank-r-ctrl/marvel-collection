const marvelPhases = [
  {
    phase: "Phase One (2008–2012)",
    movies: [
      { id: 1, title: "Iron Man", releaseDate: "May 2, 2008", image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
      { id: 2, title: "The Incredible Hulk", releaseDate: "June 13, 2008", image: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg" },
      { id: 3, title: "Iron Man 2", releaseDate: "May 7, 2010", image: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" },
      { id: 4, title: "Thor", releaseDate: "May 6, 2011", image: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
      { id: 5, title: "Captain America: The First Avenger", releaseDate: "July 22, 2011", image: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg" },
      { id: 6, title: "The Avengers", releaseDate: "May 4, 2012", image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" }
    ]
  },
  {
    phase: "Phase Two (2013–2015)",
    movies: [
      { id: 7, title: "Iron Man 3", releaseDate: "May 3, 2013", image: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg" },
      { id: 8, title: "Thor: The Dark World", releaseDate: "November 8, 2013", image: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg" },
      { id: 9, title: "Captain America: The Winter Soldier", releaseDate: "April 4, 2014", image: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg" },
      { id: 10, title: "Guardians of the Galaxy", releaseDate: "August 1, 2014", image: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
      { id: 11, title: "Avengers: Age of Ultron", releaseDate: "May 1, 2015", image: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg" },
      { id: 12, title: "Ant-Man", releaseDate: "July 17, 2015", image: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg" }
    ]
  },
  {
    phase: "Phase Three (2016–2019)",
    movies: [
      { id: 13, title: "Captain America: Civil War", releaseDate: "May 6, 2016", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHy7UYgeSzO7qbkGLSWUXL9HyV0jcxTj2rhmsDIxYt0gYDgOXZ" },
      { id: 14, title: "Doctor Strange", releaseDate: "November 4, 2016", image: "https://image.tmdb.org/t/p/w500/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg" },
      { id: 15, title: "Guardians of the Galaxy Vol. 2", releaseDate: "May 5, 2017", image: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg" },
      { id: 16, title: "Spider-Man: Homecoming", releaseDate: "July 7, 2017", image: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
      { id: 17, title: "Thor: Ragnarok", releaseDate: "November 3, 2017", image: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },
      { id: 18, title: "Black Panther", releaseDate: "February 16, 2018", image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
      { id: 19, title: "Avengers: Infinity War", releaseDate: "April 27, 2018", image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
      { id: 20, title: "Ant-Man and the Wasp", releaseDate: "July 6, 2018", image: "https://image.tmdb.org/t/p/w500/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg" },
      { id: 21, title: "Captain Marvel", releaseDate: "March 8, 2019", image: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" },
      { id: 22, title: "Avengers: Endgame", releaseDate: "April 26, 2019", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
      { id: 23, title: "Spider-Man: Far From Home", releaseDate: "July 2, 2019", image: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg" }
    ]
  },
  {
    phase: "Phase Four (2021–2022)",
    movies: [
      { id: 24, title: "Black Widow", releaseDate: "July 9, 2021", image: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
      { id: 25, title: "Shang-Chi and the Legend of the Ten Rings", releaseDate: "September 3, 2021", image: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg" },
      { id: 26, title: "Eternals", releaseDate: "November 5, 2021", image: "https://image.tmdb.org/t/p/w500/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg" },
      { id: 27, title: "Spider-Man: No Way Home", releaseDate: "December 17, 2021", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
      { id: 28, title: "Doctor Strange in the Multiverse of Madness", releaseDate: "May 6, 2022", image: "https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg" },
      { id: 29, title: "Thor: Love and Thunder", releaseDate: "July 8, 2022", image: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
      { id: 30, title: "Black Panther: Wakanda Forever", releaseDate: "November 11, 2022", image: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" }
    ]
  },
  {
    phase: "Phase Five (2023–2025)",
    movies: [
      { id: 31, title: "Ant-Man and the Wasp: Quantumania", releaseDate: "February 17, 2023", image: "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" },
      { id: 32, title: "Guardians of the Galaxy Vol. 3", releaseDate: "May 5, 2023", image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" },
      { id: 33, title: "The Marvels", releaseDate: "November 10, 2023", image: "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg" },
      { id: 34, title: "Deadpool & Wolverine", releaseDate: "July 26, 2024", image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
      { id: 35, title: "Captain America: Brave New World", releaseDate: "February 14, 2025", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaEsSWlNa9yiHe17uXb97r7sOLwNcL_S4Fmxxvw4BigMlp1ssU" },
      { id: 36, title: "Thunderbolts", releaseDate: "May 2, 2025", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWr47D8jZJ_7_U298o1wURdsW6-m43EYG8nWQeEObCLbyztkc" }
    ]
  },
  {
    phase: "Phase Six (2025–2027)",
    movies: [
      { id: 37, title: "The Fantastic Four: First Steps", releaseDate: "July 25, 2025", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQd-BN3XSYs1IEmKerLM_hwcEKoJL25llBJmsAoWgTMXo3PHCCe" },
      { id: 38, title: "Spider-Man: Brand New Day", releaseDate: "July 31, 2026", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR-tNkukXq2Ik_xuq6x0siyJgZfR0YMWZNEfwtwWDwpfN6i-ZT" },
      { id: 39, title: "Avengers: Doomsday", releaseDate: "December 18, 2026", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWDog93L9VzsBasXQ3udHRJIBl_UMmlsGO4cgRqrqlWFS4WNV_" },
      { id: 40, title: "Avengers: Secret Wars", releaseDate: "December 17, 2027", image: "https://placehold.co/400x600/111111/ffffff?text=Avengers%3A+Secret+Wars" }
    ]
  }
];

const container = document.getElementById("movies");
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser || !loggedInUser.email) {
  window.location.href = "/login.html";
}

const comingSoonTitles = [
  "Spider-Man: Brand New Day",
  "Avengers: Doomsday",
  "Avengers: Secret Wars"
];

function goToCollection() {
  window.location.href = "/index.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "/login.html";
}

function normalizeMovie(movie) {
  return {
    id: Number(movie.id),
    title: movie.title,
    image: movie.image,
    releaseDate: movie.releaseDate
  };
}

async function getMyReviews() {
  try {
    const res = await fetch("/reviews/" + encodeURIComponent(loggedInUser.email));
    return await res.json();
  } catch (err) {
    return [];
  }
}

function isReviewed(movieId, reviews) {
  return reviews.some(item => Number(item.movieId) === Number(movieId));
}

function isComingSoon(movie) {
  return comingSoonTitles.includes(movie.title);
}

function openMovie(movie) {
  localStorage.setItem("selectedMovie", JSON.stringify(normalizeMovie(movie)));
  window.location.href = "/movie.html";
}

function createCard(movie, reviews) {
  const card = document.createElement("div");
  card.className = "movie-card";

  const reviewed = isReviewed(movie.id, reviews);
  const comingSoon = isComingSoon(movie);

  if (reviewed) {
    card.classList.add("reviewed-movie", "locked-movie");
  }

  if (comingSoon) {
    card.classList.add("coming-soon-movie", "locked-movie");
  }

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-info">
      <div class="movie-title">${movie.title}</div>
      <div class="movie-date">${movie.releaseDate}</div>

      ${
        comingSoon
          ? `
            <div class="coming-soon-badge">Coming Soon</div>
            <div class="locked-note">This movie is not released yet, so review is locked for now.</div>
          `
          : reviewed
            ? `
              <div class="watched-badge">✓ Watched</div>
              <div class="locked-note">Review already added. Edit it from My Collection.</div>
            `
            : `
              <div class="review-open-badge">Ready to Review</div>
            `
      }
    </div>
  `;

  if (!reviewed && !comingSoon) {
    card.onclick = () => openMovie(movie);
  }

  return card;
}

async function renderMovies() {
  container.innerHTML = "";

  const myReviews = await getMyReviews();

  marvelPhases.forEach(phase => {
    const section = document.createElement("div");
    section.className = "phase-section";

    const title = document.createElement("h2");
    title.className = "phase-title";
    title.textContent = phase.phase;

    const grid = document.createElement("div");
    grid.className = "phase-grid";

    phase.movies.forEach(movie => {
      grid.appendChild(createCard(movie, myReviews));
    });

    section.appendChild(title);
    section.appendChild(grid);
    container.appendChild(section);
  });
}

renderMovies();