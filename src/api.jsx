import axios from "axios";

export const getMovieList = async () => {
//   const baseUrl = "https://api.themoviedb.org/3";
//   const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmE5MmE4MTVmNzIxMDA2NDBjYmE4NzA4YTdlYWZjOCIsInN1YiI6IjY2NjE2NTQ3ZGNlYTRkZGJjMThkODRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SvEDbfkEwK943knXuMP4o-2Acp53FVvjW6gaQxun5yk";
//   const movie = await axios.get(
//     `${baseUrl}/movie/popular?language=en-US&page=1&access_token=${access_token}}`
//   );
//   console.log(movie);

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmE5MmE4MTVmNzIxMDA2NDBjYmE4NzA4YTdlYWZjOCIsInN1YiI6IjY2NjE2NTQ3ZGNlYTRkZGJjMThkODRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SvEDbfkEwK943knXuMP4o-2Acp53FVvjW6gaQxun5yk'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/popular', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
