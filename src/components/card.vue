<script>
import { store } from '../store';
export default {
    name: "card",
    props: ["titolo", "TitoloOriginale", "lingua", "voto", "immagineFilm", "copertina", "descrizione"],
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
                <img :src="store.pathimg + immagineFilm" :alt="'immagine non trovata :' + titolo">
                <div class="descrizione">
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
                    <span class="stella" v-for="n in numeroIntero()">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>
                    <span class="stella" v-if="numeroIntero() < 5">
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

                    <div>{{ descrizione }}</div>
                </div>
            </div>
        </div>
    </main>
</template>
<style  lang="scss" scoped >
.containerfilm {
    width: 100%;
    perspective: 900px;
    margin-top: 30px;
    margin-bottom: 80px;

    .stella {
        color: gold;
    }

    .prospettiva {
        position: relative;
        transform-style: preserve-3d;
        transition: 0.8s;
        width: 100%;
        height: 100%;
    }

    .prospettiva:hover {
        background-color: white;
    }

    .prospettiva:hover .descrizione {
        display: block;
        padding: 20px 20px;
        transform: rotateY(180deg);

    }

    .descrizione {
        display: none;
        position: absolute;
        top: 0px;
        left: 0px;
    }


    .prospettiva:hover {
        box-shadow: 0 0 40px 40px rgba(0, 0, 0, 0.5);
        transform: rotateY(180deg);
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

    .prospettiva:hover img {
        opacity: 0;
    }

    img {
        border-radius: 10px;
        width: 80%;
        display: block;
        margin: 0 auto;
    }

    @media screen and (max-width: 1400px) {
        .prospettiva {
            padding-bottom: 180px;

        }
    }

    @media screen and (max-width: 992px) {

        .titolo,
        .titolooriginale {
            font-size: 13px;
        }

        h3 {
            font-size: 13px;
        }

        .prospettiva {
            padding-bottom: 150px;

        }
    }

    @media screen and (max-width: 768px) {

        .titolo,
        .titolooriginale {
            font-size: 10px;
        }

        h3 {
            font-size: 10px;
        }

        .prospettiva {
            padding-bottom: 170px;

        }


    }

    @media screen and (max-width: 575px) {
        h3 {
            font-size: 18px;
        }

        .titolo {
            font-size: 18px;
        }

        .prospettiva {
            padding-bottom: 30px;
            width: 80%;
            margin: 0 auto;
            padding-bottom: 0px;

        }
    }
}</style>