<script>
import maincard from './maincard.vue';
import header1 from './header1.vue';
export default {
  name: "appvue",
  components: {
    maincard,
    header1,
  }
}
</script>

<template>
  <header1></header1>
  <maincard>
  </maincard>
</template>

<style scoped></style>
