const KEY = 'abf5df7d75a67bd02b3b1e4ead1fc14d';

export async function fetchPopularForToday(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&page=${page}`
  );

  const data = await response.json();
  return data;
}

export async function fetchFilmById(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`
  );

  const data = await response.json();
  return data;
}

export async function fetchActorsByMovieId(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchReviewsByMovieId(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchMoviesByQuery(query, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=${page}`
  );
  const data = await response.json();
  return data;
}

export async function fetchTrailerByMovieId(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=abf5df7d75a67bd02b3b1e4ead1fc14d`
  );
  const data = await response.json();
  return data;
}
