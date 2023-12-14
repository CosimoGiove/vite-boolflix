<script>
import axios from "axios"
export default {
    name: "barra di ricerca",
    data() {
        return {
            RicercaFilm: "",
            ArrayFilm: [],
            UrlFilm:"https://api.themoviedb.org/3/search/movie?api_key=4b7a12e19ac7dfbc0a77194131ed937f&query=",
        }
    },
    methods: {
        film() {
            if (this.RicercaFilm !== "") {
                axios.get(this.UrlFilm + this.RicercaFilm)
                    .then((data) => {
                        this.ArrayFilm = data.data
                        this.RicercaFilm = ""
                    })
            }
        }
    },
}
</script>
<template>
    <header>
        <input type="search" name="ricercafilm" id="film" v-model="RicercaFilm">
        <button @click="film">cerca</button>
        <div v-for="ArrayFilms in ArrayFilm.results">
            <h2>titolo : {{ ArrayFilms.title }} </h2>
            <h2>titolo originale : {{ ArrayFilms.original_title }}</h2>
            <h2 v-if="ArrayFilms.original_language === 'en' ">
                <span class="fi fi-gb"></span>
            </h2>
            <h2 v-else-if="ArrayFilms.original_language === 'it' ">
                <span class="fi fi-it"></span>
            </h2>
            <h2 v-else=""> lingua : {{ ArrayFilms.original_language }}</h2>
            <h2>voto : {{ ArrayFilms.vote_average}}</h2>
        </div>
    </header>
</template>
<style scoped></style>