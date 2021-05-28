<template>
  <div class="UserEdit">
    <form
      id="useredit"
      @submit="checkForm"
      action=""
      method="post"
    >
        <p>
        <label for="first">Prénom</label>
            <input
                id="first"
                v-model="first"
                type="text"
                name="first"
            >
        </p>
        <p>
        <label for="last">Nom</label>
            <input
                id="last"
                v-model="last"
                type="text"
                name="last"
            >
        </p>
        <p>
        <label for="phone">Téléphone</label>
            <input
                id="phone"
                v-model="phone"
                type="text"
                name="phone"
            >
        </p>
        <p>
        <label for="details">Détails</label>
            <input
                id="details"
                v-model="details"
                type="text"
                name="details"
            >
        </p>
        <p>
        <label for="gender">Genre</label>
            <select
                id="gender"
                v-model="gender"
                name="gender"
            >
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
        </p>
        <p>
        <input
            type="submit"
            value="Submit"
        >
        </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
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
