<script>
import { store } from '../store';
export default {
    name: "card",
    props: ["titolo", "TitoloOriginale", "lingua", "voto", "immagineFilm", "copertina","descrizione"],
    data() {
        return {
            store,
        }
    },
    methods: {
        numeroIntero() {
            return Math.ceil(this.voto / 2)
        },
    }
}
</script>
<template>
    <main>
        <div class="containerfilm">
            <div class="prospettiva">
                <!-- <h2>film</h2> -->
                <img :src="store.pathimg + immagineFilm" :alt="'immagine non trovata :' + titolo">
                <span class="titolo">
                    <h3 class="titolo">titolo :</h3>
                </span>
                <h3>{{ titolo }}</h3>
                <div class="titolooriginale">
                    <span>
                        <h3>titolo originale :</h3>
                    </span>
                    <h3>{{ TitoloOriginale }}</h3>
                </div>

                <h4>
                    <span>voto:</span>
                    {{ numeroIntero() }}
                </h4>
                <span v-for="n in numeroIntero()">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </span>
                <span v-if="numeroIntero() < 5">
                    <span v-for=" stella in 5 - numeroIntero()">
                        <font-awesome-icon icon="fa-regular fa-star" />
                    </span>
                </span>
                <h4 v-if="lingua === 'it'">
                    <span class="fi fi-it"></span>
                </h4>
                <h4 v-else-if="lingua === 'en'">
                    <span class="fi fi-gb"></span>
                </h4>
                <h4 v-else="">
                    lingua: {{ lingua }}
                </h4>
                <div>
                    <div class="descrizione">
                        {{ descrizione }}
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
<style  lang="scss" scoped >
.containerfilm {
    width: 100%;
    margin-top: 20px;
    perspective: 900px;
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 120px;

    .prospettiva{
        position: relative;
        transform-style: preserve-3d;
        transition: 0.8s;

    }
    .prospettiva:hover{
        background-color: white;
    }
    .prospettiva:hover .descrizione{
        display: block;
        padding: 20px 20px;
        font-size: 18px;

    }
    .descrizione{
        display: none;
    }


    .prospettiva:hover {
        transform: translateZ(20px) rotateX(1deg) rotateY(10deg);
        box-shadow: 0 0 40px 40px rgba(0, 0, 0, 0.5);
        transform: translatey(20px) rotateX(1deg) rotateY(10deg);
        border-radius: 20px;
    }

    .titolo {
        margin-top: 20px;
    }

    span {
        color: red;
        text-transform: uppercase;
    }

    .titolooriginale {
        margin: 10px 0px;
    }

    h3 {
        font-size: 15px;
    }

    h4 {
        margin-top: 10px;
    }

    img:hover {
        cursor: pointer;
    }
    .prospettiva:hover img{
        border-top: 10px solid green;
    }

    img {
        border-radius: 10px;
        box-shadow: 0px 0px 20px 20px black;
        border-top: 10px solid red;
        width: 100%;
        display: block;
    }
}
</style>