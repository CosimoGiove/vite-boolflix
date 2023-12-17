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
            if(this.store.RicercaFilm === ""){
                location.reload()
            }else{
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
        aggiorna() {
            location.reload()
        },
    }
}
</script>
<template>
    <header>
        <div class="containerheader">
            <div>
                <ul>
                    <li>
                        <h1 @click="aggiorna">Booflix</h1>
                    </li>
                    <li>home</li>
                    <li>serie tv</li>
                    <li>film</li>
                    <li>nuovi e popolari</li>
                    <li>la mia lista</li>
                    <li>sfoglia per lingua</li>
                </ul>
            </div>
            <div>
                <input type="search" name="ricercafilm" id="film" v-model="store.RicercaFilm">
                <button class="bottonericerca" @click="film">cerca</button>
            </div>
        </div>

    </header>
</template>
<style lang="scss" scoped>
header {

    background-color: black;
    padding: 10px;
    position: fixed;
    z-index: 9999;
    right: 0px;
    left: 0px;



    ul li {
        display: inline-block;
        vertical-align: middle;
        color: white;
        margin-left: 20px;
        font-size: 20px;
        cursor: pointer;
    }
}

.containerheader {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    align-items: center;

    .bottonericerca {
        margin-left: 20px;
        background-color: white;
        color: red;
        font-size: 15px;
        padding: 5px 10px;

    }

    h1 {
        color: red;
        font-size: 50px;
    }

    #film {
        font-size: 25px;
        vertical-align: middle;
    }
}</style>
