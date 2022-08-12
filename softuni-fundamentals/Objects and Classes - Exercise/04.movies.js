function movies(arr) {
  let movies = [];

  for (const text of arr) {
    if (text.includes("addMovie")) {
      let nameOfMovie = text.split("addMovie ")[1];
      movies.push({ name: nameOfMovie });
    } else if (text.includes("directedBy")) {
      let search = text.split(" directedBy ");
      let movieName = search[0];
      let directorName = search[1];
      let movieSearch = movies.find((movie) => movie.name === movieName);
      if (movieSearch) {
        movieSearch.director = directorName;
      }
    } else if (text.includes("onDate")) {
      let search = text.split(" onDate ");
      let movieName = search[0];
      let date = search[1];
      let movieSearch = movies.find((movie) => movie.name === movieName);
      if (movieSearch) {
        movieSearch.date = date;
      }
    }
  }
  for (let movie of movies) {
    if (movie.name && movie.director && movie.date) {
        console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
