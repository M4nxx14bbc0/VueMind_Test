<script>
export default {
  name: 'Header'
}
</script>

<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/page">Page</router-link>
    </li>
    <li>
      <router-link to="/user">User</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
ul li a {
  text-decoration: none;
  padding: 10px;
}
ul li a:hover{
  border: blue solid;
}
ul li a.router-link-exact-active{
  background: gray;
}
</style>
