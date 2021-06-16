<template>
  <div class="UserDetails">
    <div class="align-items-center">
      <h1>Détails</h1>
    </div>
    <br>
    <div class="container" style="width:40%;">
      <div class="row align-items-center">
        <div class="col" style="border-right: 1px solid">
          <img v-bind:src="user.avatarUrl" style="height:250px" />
        </div>
        <div class="col">
          <h3>{{ user.firstName }} {{ user.lastName }}</h3>
          <br>
          <p>Email : {{ user.email }}</p>
          <p>Age : {{ user.age }} ans</p>
          <p>Téléphone : {{ user.phone }}</p>
          <p>Genre : {{ user.gender }}</p>
          <p>Détails : {{ user.details }}</p>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    user: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
