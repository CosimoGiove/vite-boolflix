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
                    <span class="stella" v-for="n in numeroInteroSerie()">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>
                    <span class="stella" v-if="numeroInteroSerie() < 5">
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
    .stella{
        color: gold;
    }


    .prospettiva {
        position: relative;
        transform-style: preserve-3d;
        transition: 0.6s;
        padding-bottom: 100px;

    }
    .prospettiva:hover{
        background-color: white;
    }
    .descrizioneover{
        font-size: 14px;
    }

    .prospettiva:hover img {
        opacity: 0;
        transform: rotateY(180deg);
    }

    .prospettiva:hover .descrizione {
        display: block;
        padding: 20px 20px;
        transform: rotateY(180deg);

    }

    .descrizione {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
    }

    .titolo {
        margin-top: 20px;
    }

    img {
        border-radius: 10px;
        width: 80%;
    }

    .prospettiva:hover {
        box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);
        transform: rotateY(180deg);
        border-radius: 20px;

    }

    span {
        color: red;
        text-transform: uppercase;
        font-size: 16px;
    }

    h4 {
        margin: 10px 0px;
    }
    /* media queries */
    @media screen and ( max-width: 1400px){
        .prospettiva{
            padding-bottom: 200px;
        }
    }
    @media screen and ( max-width: 992px){
        .descrizioneover{
        font-size: 15px;
    }
    span{
        font-size: 12px;
    }
    .prospettiva{
        padding-bottom: 160px;
    }

    }
    @media screen and ( max-width: 768px){
        .descrizioneover{
        font-size: 10px;
    }
    span{
        font-size: 12px;
    }
    .prospettiva{
        padding-bottom: 150px;
    }

    }
 @media screen and ( max-width: 575px){
    .descrizioneover{
        font-size: 15px;
    }
    span{
        font-size: 15px;
    }
    .prospettiva{
        padding-bottom: 30px;
        width: 80%;
        margin: 0 auto;
    }
 }



}
</style>