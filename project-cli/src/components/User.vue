<script>
export default {
  name: 'User',
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<template>
  <div>
    <h1>Pagina Utente</h1>
    <div v-if="id">id: {{id}}</div>
  </div>
</template>

<style scoped>

</style>
