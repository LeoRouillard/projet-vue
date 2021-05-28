<template>
  <div class="header">
    <h1>Liste des utilisateurs</h1>
    <br>
    <button
      class="btn btn-primary"
      @click="fetchUsers"
    >
      Fetch users
    </button>
    <select
      id="value"
      name="value"
      @change="changeVal"
    >
      <option value="all">Tout</option>
      <option value="female">Femme</option>
      <option value="male">Homme</option>
    </select>
    <input v-model="name" type="text" @input="recherche(name)" placeholder="Rechercher" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    fetchUsers() {
      this.$emit('fetchUsers');
    },
    changeVal(e) {
      this.$emit('input', e.target.value);
    },
    recherche(value) {
      this.$emit('name', value);
    },
  },
};
</script>
