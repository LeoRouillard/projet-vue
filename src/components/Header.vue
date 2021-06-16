<template>
  <div class="header">
    <h1>Liste des utilisateurs</h1>
    <br>
    <div style="display:flex;justify-content:space-evenly">
      <button
        class="btn btn-primary"
        @click="fetchUsers"
      >
        Fetch users
      </button>
      <button
        class="btn btn-success"
        type="button"
        @click="showModal = true"
      >
        Créer un utilisateur
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
      <span class="counter">
        {{ userFiltered }} / {{ userNonFiltered }} utilisateurs
      </span>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'Header',
  data() {
    return {
      name: '',
      showModal: false,
    };
  },
  props: {
    userFiltered: Number,
    userNonFiltered: Number,
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
