
const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посматрели?', '');
   
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = prompt('Сколько фильмов вы уже посматрели?', '');
      }
      //personalMovieDB.count = numberOfFilms;
   },
   detectedPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
         alert('Просмотрено довольно мало фильмов!');
      } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
         alert('Вы классически зритель!');
      } else if (personalMovieDB.count >= 30) {
         alert('Вы киноман!');
      } else {
         alert('Пройзошло ошибка!');
      }
   },
   rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
         let a = prompt('Один из просмотренных фильмов?', '');
         let b = prompt('На сколько оцените его?', '');
      
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            i--;
         }
      }
   },
   showMyDB: function(hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
      console.log(personalMovieDB);
   },
   writeYourGenres: function(genres) {
      //let genre;
      //for(let i = 1; i < 4; i++) {
      //   genre = prompt(`Ваш любимый жанр под номером ${i}`);
         
      //   if (genre === null || genre === '') {
      //      genre = prompt(`Ваш любимый жанр под номером ${i}`);
      //      i--;
      //   } else {
      //      genres[i - 1] = genre;
      //   }

      //}
      //genres.forEach((item, index, array) => {
      //   console.log(`Любимый жанр #${index + 1} - это ${item}`);
      //});

      for(let i = 1; i < 3; i++) {
         let genre = prompt(`Введите ваши любимые жанры через запятую`);
         
         if (genre === null || genre === '') {
            genre = prompt(`Ваш любимый жанр под номером ${i}`);
            i--;
         } else {
            genres = genre.split(",");
            genres.sort();
         }

         genres.forEach((item, index, array) => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);

         });

      }

   },
};

//personalMovieDB.start();

//personalMovieDB.detectedPersonalLevel();

//personalMovieDB.rememberMyFilms();

//personalMovieDB.showMyDB(personalMovieDB.privat);
//personalMovieDB.toggleVisibleMyDB();

//personalMovieDB.writeYourGenres(personalMovieDB.genres);