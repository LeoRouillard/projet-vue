<template>
  <form @submit.prevent="saveForm">
    <h1>Formulaire d'utilisateur</h1>
    <div class="card-body p-5">
      <div class="row">
        <div class="col-md-12 col-lg-6 col-sm-12">
          <label class="mt-2">Nom</label>
          <input class="form-control" type="text" v-model="user.lastName">
          <label class="mt-2">email</label>
          <input class="form-control" type="email" v-model="user.email">
          <label class="mt-2">Age</label>
          <input class="form-control" type="date" v-model="user.birthDate">
          <label class="mt-2">Phone</label>
          <input class="form-control" type="text" v-model="user.phone">
        </div>
        <div class="col-md-12 col-lg-6 col-sm-12">
          <label class="mt-2">Prenom</label>
          <input class="form-control" type="tel" v-model="user.firstName">
          <label class="mt-2">Genre</label>
          <select class="form-control" v-model="user.gender">
            <option>male</option>
            <option>female</option>
          </select>
          <label class="mt-2">Détails</label>
          <textarea class="form-control"  v-model="user.details"/>
          <label class="mt-2">Image url</label>
          <input class="form-control" type="text" v-model="user.avatarUrl">
        </div>
      </div>

      <div class="text-center mt-5">
        <button
          type="submit"
          class="btn btn-primary mr-2"
        >
          Enregistrer
        </button>
        <button
          class="btn btn-danger"
          type="button"
          @click="cancel"
        >
          Annuler
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: ['initialValues'],
  data() {
    return {
      user: this.initialValues,
    };
  },
  methods: {
    saveForm() {
      this.$emit('submit', this.user);
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style>
.img-profile-size {
  height: 145px;
  margin-top: -75px
}
</style>
