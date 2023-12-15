<script>
export default {
    name: "card",
    props: ["NomeSerie", "NomeOriginale", "LinguaOriginale", "VotoSerie"]
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
                    <h4>voto: {{ VotoSerie }}</h4>
                </li>
            </ul>
        </div>
    </main>
</template>
<style scoped></style>