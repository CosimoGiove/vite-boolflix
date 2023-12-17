<script>
import { store } from './store';
export default {
    name: "card",
    props: ["NomeSerie", "NomeOriginale", "LinguaOriginale", "VotoSerie", "ImmagineSerie", "descrizioneserie"],
    data() {
        return {
            store,
        }
    },
    methods: {
        numeroInteroSerie() {
            return Math.ceil(this.VotoSerie / 2)
        },
    }
}
</script>
<template>
    <main>
        <div class="containerserie">
            <div class="prospettiva">
                <img :src="store.pathimg + ImmagineSerie" :alt="'immagine non trovata :' + NomeSerie">
                <div class="descrizione">
                    <h4 class="titolo">
                        <span>titolo serie:</span>
                        {{ NomeSerie }}
                    </h4>
                    <h4><span>titolo originale serie:</span>
                        {{ NomeOriginale }}
                    </h4>
                    <h4><span>voto:</span>
                        {{ numeroInteroSerie() }}
                    </h4>
                    <span v-for="n in numeroInteroSerie()">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>
                    <span v-if="numeroInteroSerie() < 5">
                        <span v-for=" stella in 5 - numeroInteroSerie()">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </span>
                    </span>
                    <h4 v-if="LinguaOriginale === 'it'">
                        <span class="fi fi-it"></span>
                    </h4>
                    <h4 v-else-if="LinguaOriginale === 'en'">
                        <span class="fi fi-gb"></span>
                    </h4>
                    <h4 v-else="">
                        lingua: {{ LinguaOriginale }}
                    </h4>
                    <div class="descrizioneover">
                        {{ descrizioneserie }}
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.containerserie {
    width: 100%;
    padding-bottom: 20px;
    padding-top: 20px;


    .prospettiva {
        position: relative;
        transform-style: preserve-3d;
        transition: 0.6s;
        padding-bottom: 100px;

    }
    .descrizioneover{
        font-size: 14px;
    }

    .prospettiva:hover img {
        opacity: 0;
    }

    .prospettiva:hover .descrizione {
        display: block;
        padding: 20px 20px;

    }

    .descrizione {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
    }

    .titolo {
        margin-top: 20px;
    }

    img {
        border-radius: 10px;
        width: 80%;
    }

    .prospettiva:hover {
        transform: translateZ(20px) rotateX(1deg) rotateY(10deg);
        box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);
        transform: translatey(20px) rotateX(1deg) rotateY(10deg);
    }

    span {
        color: red;
        text-transform: uppercase;
        font-size: 16px;
    }

    h4 {
        margin: 10px 0px;
    }
}
</style>