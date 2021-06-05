'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
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
if (personalMovieDB.count < 10) {
    console.log('Low');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classic');
} else if (personalMovieDB.count >= 30) {
    console.log('Cinema lover');
} else {
    console.log('Error');
}
console.log(personalMovieDB);




