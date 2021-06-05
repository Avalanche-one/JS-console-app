'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const a = prompt('Один з останніх переглянутих фільмів?', '');
const b = prompt('На скільки оціните його?', '');
const c = prompt('Один з останніх переглянутих фільмів?', '');
const d = prompt('На скільки оціните його?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);


