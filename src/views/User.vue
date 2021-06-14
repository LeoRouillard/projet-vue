<template>
  <div class="user">
    <div v-if="!modification">
      <UserDetails :user="user" />
      <button
        class="btn btn-primary profile-button"
        type="button"
        @click="modification = true"
      >
        Editer le profil
      </button>
    </div>
    <div v-else style="margin-top:25px">
      <form class="card shadow w-50 mx-auto" @submit.prevent="updateUser">
        <div class="card-body p-5">
          <div class="row">
            <div class="col-md-12 col-lg-6 col-sm-12">
              <label class="mt-2">Nom</label>
              <input class="form-control" type="text" v-model="user.lastName">
              <label class="mt-2">Prénom</label>
              <input class="form-control" type="text" v-model="user.firstName">
              <label class="mt-2">Email</label>
              <input class="form-control" type="email" v-model="user.email">
              <label class="mt-2">Date de naissance</label>
              <input class="form-control" type="datetime-local" v-model="user.birthDate">
            </div>
            <div class="col-md-12 col-lg-6 col-sm-12">
              <label class="mt-2">Détails</label>
              <textarea class="form-control" v-model="user.details"/>
            </div>
          </div>

          <div class="text-center mt-5">
            <button type="submit" class="btn btn-primary ">
              Modifier
            </button>
            <button
              class="btn btn-danger"
              type="button"
              @click="modification = false"
            >
              Annuler
            </button>
          </div>
        </div>
      </form>
      <br>
    </div>
  </div>
</template>

<script>
import UserDetails from '@/components/UserDetails.vue';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'User',
  components: {
    UserDetails,
  },
  data() {
    return {
      user: {},
      modification: false,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const { data: user } = await axios(`https://ynov-front.herokuapp.com/api/users/${this.$route.params.id}`);
      this.user = {
        ...user.data,
        age: new Date(Date.now() - new Date(user.data.birthDate).getTime()).getFullYear() - 1970,
      };
    },
    async updateUser() {
      await axios.put(`https://ynov-front.herokuapp.com/api/users/${this.$route.params.id}`, this.user)
        .then(() => {
          this.$emit('notification', { type: 'success', message: 'Utilisateur modifié' });
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
