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
            if (this.store.RicercaFilm === "") {
                location.reload()
            } else {
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
                    <li class="titolo">
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
        font-size: 12px;
        padding: 5px 10px;

    }
    ul li {
        font-size: 17px;
    }

    h1 {
        color: red;
        font-size: 40px;
    }

    #film {
        font-size: 15px;
        vertical-align: middle;
    }
    /* media queries*/
    @media screen and ( max-width: 992px){
        h1{
            font-size: 30px;
        }
        ul li {
            font-size: 12px;
        }
        #film{
            font-size: 10px;
        }
        .bottonericerca{
            font-size: 10px;
            padding: 2px 3px;
        }
    }
    @media screen and ( max-width: 768px){
        h1{
            font-size: 20px;
        }
        ul li {
            font-size: 10px;
        }
        #film{
            font-size: 10px;
        }
        .bottonericerca{
            font-size: 10px;
            padding: 2px 3px;
        }

    }
    @media screen and ( max-width: 575px) {
        h1{
            font-size: 30px;
        }
        ul li{
            display: none;
        }
        .titolo{
            display: block;
        }
        #film{
            font-size: 12px;
        }
        .bottonericerca{
            font-size: 10px;
            padding: 2px 3px;
        }
    }

}
</style>
