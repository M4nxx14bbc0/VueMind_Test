<template>
  <div class="custom-card">
    <p>{{ text }}</p>
    <span>{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['text', 'subtitle']
}
</script>

<style scoped>
.custom-card {
  height: 150px;
  width: 150px;
  background: blue;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-card p {
  font-size: 20px;
  text-align: center;
}
.custom-card span {
  font-size: 10px;
  text-align: center;
}
h1, h2{
  font-weight: normal;
}
ul{
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
</style>
