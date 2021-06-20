<template>
  <div class="header">
    <Modal
      v-if="showModal"
      @closeModal="closeModal"
      @notification="showNotification"
      @click="fetchUsers"
    />

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
        type="button"
        class="btn btn-success"
        @click="openModal"
      >
        Create user
      </button>
      <select
        id="value"
        name="value"
        @change="changeVal"
      >
        <option
          value="all"
        >
          Tout
        </option>
        <option
          value="female"
        >
          Femme
        </option>
        <option
          value="male"
        >
          Homme
        </option>
      </select>
      <input
        v-model="name"
        type="text"
        placeholder="Rechercher"
        @input="recherche(name)"
      >
      <span class="counter">
        {{ userFiltered }} / {{ userNonFiltered }} utilisateurs
      </span>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Header',
  components: {
    Modal,
  },
  props: {
    userFiltered: Number,
    userNonFiltered: Number,
  },
  data() {
    return {
      name: '',
      showModal: false,
    };
  },
  methods: {
    fetchUsers() {
      console.log('fecthuser dans header');
      this.$emit('fetchUsers');
    },
    changeVal(e) {
      this.$emit('input', e.target.value);
    },
    recherche(value) {
      this.$emit('name', value);
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    showNotification(notification) {
      this.$emit('notification', notification);
    },
  },
};
</script>
