<template>
  <div class="user">
    <div v-if="!modification">
      <UserDetails :user="user" />
      <button
        class="btn btn-primary profile-button"
        type="button"
        style="margin-right:15px"
        @click="modification = true"
      >
        Editer le profil
      </button>
      <router-link
        to="/"
        style="color:white"
        class="btn btn-danger"
      >
        Retour
      </router-link>
    </div>
    <div
      v-else
      style="margin-top:25px"
    >
      <Form
        :initial-values="user"
        @submit="updateUser"
        @cancel="cancel"
      />
      <br>
    </div>
  </div>
</template>

<script>
import UserDetails from '@/components/UserDetails.vue';
import Form from '@/components/Form.vue';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'User',
  components: {
    UserDetails,
    Form,
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
        birthDate: user.data.birthDate.split('T')[0],
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
    cancel() {
      this.modification = false;
    },
  },
};
</script>
