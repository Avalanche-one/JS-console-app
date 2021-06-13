'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви переглянули?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви переглянули?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів?', '');
            const b = prompt('На скільки оціните його?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('OK');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Low');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Classic');
        } else if (personalMovieDB.count >= 30) {
            console.log('Cinema lover');
        } else {
            console.log('Error');
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Your best genre number ${i}?`);
            if(genre === '' || genre == null) {
                console.log('Incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre number ${i + 1} is ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};