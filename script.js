'use strict';
//functions and variable
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
    }
}
function rememberMyFilms() {
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
}
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Low');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Classic');
    } else if (personalMovieDB.count >= 30) {
        console.log('Cinema lover');
    } else {
        console.log('Error');
    }
}
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Your best genre number ${i}?`);
    }
}
//app is going
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);





