<script>
import { store } from './store';
import axios from 'axios';
export default {
    name: "header1",
    data() {
        return {
            store,
        }
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
    <header>
        <input type="search" name="ricercafilm" id="film" v-model="store.RicercaFilm">
        <button @click="film">cerca</button>
    </header>
</template>
<style></style>
