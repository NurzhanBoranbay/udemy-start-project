
let numberOfFilms;

function start() {
   numberOfFilms = prompt('Сколько фильмов вы уже посматрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Сколько фильмов вы уже посматрели?', '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function detectedPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов!');
   } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      alert('Вы классически зритель!');
   } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман!');
   } else {
      alert('Пройзошло ошибка!');
   }
}

detectedPersonalLevel();

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      let a = prompt('Один из просмотренных фильмов?', '');
      let b = prompt('На сколько оцените его?', '');
   
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
      } else {
         i--;
      }
   }
}

rememberMyFilms();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

function writeYourGenres(genres) {
   for(let i = 1; i < 4; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      genres[i - 1] = genre;
   }
   //console.log(genres);
}

showMyDB(personalMovieDB.privat);
writeYourGenres(personalMovieDB.genres);
