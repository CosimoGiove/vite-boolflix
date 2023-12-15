<script>
import { store } from '../store';
export default {
    name: "card",
    props: ["titolo", "TitoloOriginale", "lingua", "voto", "immagineFilm"],
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <main>
        <div>
            <h2>film</h2>
            <ul>
                <li>
                    <h4>titolo : {{titolo }} </h4>
                </li>
                <li>
                    <h4>titolo originale : {{TitoloOriginale }}</h4>
                </li>
                <li>
                    <h4>voto:{{ voto }}</h4>
                </li>
                <li>
                    <h4 v-if="lingua === 'it'">
                        <span class="fi fi-it"></span>
                    </h4>
                    <h4 v-else-if="lingua === 'en'">
                        <span class="fi fi-gb"></span>
                    </h4>
                    <h4 v-else="">
                        lingua: {{lingua }}
                    </h4>
                </li>
                <li>
                    <div>
                        <img :src="store.pathimg + immagineFilm" :alt=" 'immagine non trovata :' + titolo">
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>
<style scoped></style>