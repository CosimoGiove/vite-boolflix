<script>
import { store } from './store';
export default {
    name: "card",
    props: ["NomeSerie", "NomeOriginale", "LinguaOriginale", "VotoSerie", "ImmagineSerie"],
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
        <div>
            <h1>serie</h1>
            <ul>
                <li>
                    <h4>titolo serie: {{ NomeSerie }}</h4>
                </li>
                <li>
                    <h4>titolo originale serie:{{ NomeOriginale }}</h4>
                </li>
                <li>
                    <h4 v-if="LinguaOriginale === 'it'">
                        <span class="fi fi-it"></span>
                    </h4>
                    <h4 v-else-if="LinguaOriginale === 'en'">
                        <span class="fi fi-gb"></span>
                    </h4>
                    <h4 v-else="">
                        lingua: {{ LinguaOriginale }}
                    </h4>
                </li>
                <li>
                    <h4>voto:{{ numeroInteroSerie() }}</h4>
                    <span v-for="n in numeroInteroSerie()">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>
                    <span v-if="numeroInteroSerie() < 5">
                        <span v-for=" stella in 5 - numeroInteroSerie()">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </span>
                    </span>
                </li>
                <li>
                    <div>
                        <img :src="store.pathimg + ImmagineSerie" :alt="'immagine non trovata :' + NomeSerie">
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>
<style scoped></style>