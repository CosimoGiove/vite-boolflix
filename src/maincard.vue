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

    created() {
        this.interfaccia()
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
        },
        interfaccia() {
            axios.get(this.store.UrlFilm + "avengers")
                .then((data) => {
                    this.store.ArrayFilm = data.data
                    this.store.RicercaFilm = ""
                })
            axios.get(this.store.UrlSerie + "avengers")
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
        <div class="container">
            <div class="containerfilm" v-for="ArrayFilm in store.ArrayFilm.results">
                <card :titolo="ArrayFilm.title" :TitoloOriginale="ArrayFilm.original_title"
                    :lingua="ArrayFilm.original_language" :voto="ArrayFilm.vote_average"
                    :immagineFilm="ArrayFilm.poster_path" :copertina="ArrayFilm.poster_path"
                    :descrizione="ArrayFilm.overview">
                </card>
            </div>
        </div>
        <div class="container">
            <div class="containerserie" v-for="ArraySerie in store.ArraySerie.results">
                <serie :NomeSerie="ArraySerie.name" :NomeOriginale="ArraySerie.original_name"
                    :LinguaOriginale="ArraySerie.original_language" :VotoSerie="ArraySerie.vote_average"
                    :ImmagineSerie="ArraySerie.poster_path" :descrizioneserie="ArraySerie.overview">
                </serie>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.containerfilm {
    width: calc(100% / 4);
    text-align: center;
}

.containerserie {
    width: calc(100% / 4);
    text-align: center;
    margin-top: 20px;


}

.container {
    display: flex;
    flex-wrap: wrap;
    background-color: #303030;
}
</style>