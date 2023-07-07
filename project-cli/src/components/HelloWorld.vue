<template>
  <div class="hello">
    <div class="flex">
      <app-card v-for="el in listData" :text="el.text" :subtitle="el.subtitle"></app-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      listData: [
        {text:'Titolo 1', subtitle: 'Sottotitolo 1'},
        {text:'Titolo 2', subtitle: 'Sottotitolo 2'},
        {text:'Titolo 3', subtitle: 'Sottotitolo 3'},
        {text:'Titolo 4', subtitle: 'Sottotitolo 4'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.flex {
  display: flex;
  justify-content: space-evenly;
}
</style>
