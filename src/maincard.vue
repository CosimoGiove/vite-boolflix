<script>
import axios from "axios"
import { store } from "./store"
import card from "./components/card.vue"
import serie from "./serie.vue"
export default {
    name: "barra di ricerca",
    data() {
        return {
            store,
        }
    },
    components: {
        card,
        serie,
    },
    methods: {
        film() {
            axios.get(this.store.UrlFilm + this.store.RicercaFilm)
                .then((data) => {
                    this.store.ArrayFilm = data.data
                    this.store.RicercaFilm = ""
                })
            axios.get(this.store.UrlSerie + this.store.RicercaFilm)
                .then((data) => {
                    this.store.ArraySerie = data.data
                    this.store.RicercaFilm = ""
                })
        }
    },
}
</script>
<template>
    <main>
        <div v-for="ArrayFilm in store.ArrayFilm.results">
            <card :titolo="ArrayFilm.title" :TitoloOriginale="ArrayFilm.original_title"
                :lingua="ArrayFilm.original_language" :voto="ArrayFilm.vote_average"
                :immagineFilm="ArrayFilm.backdrop_path">
            </card>
        </div>
        <div v-for="ArrayFilm in store.ArraySerie.results">
            <serie :NomeSerie="ArrayFilm.name" :NomeOriginale="ArrayFilm.original_name"
                :LinguaOriginale="ArrayFilm.original_language" :VotoSerie="ArrayFilm.vote_average"
                :ImmagineSerie="ArrayFilm.poster_path"></serie>
        </div>
    </main>
</template>
<style scoped></style>