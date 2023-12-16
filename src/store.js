import { reactive } from "vue";
export const store = reactive({
    RicercaFilm: "",
    ArrayFilm: [],
    ArraySerie:[],
    UrlFilm:"https://api.themoviedb.org/3/search/movie?api_key=4b7a12e19ac7dfbc0a77194131ed937f&query=",
    UrlSerie:"https://api.themoviedb.org/3/search/tv?api_key=4b7a12e19ac7dfbc0a77194131ed937f&query=",
    pathimg:"https://image.tmdb.org/t/p/w400",
    NumerovotoIntero:""
})