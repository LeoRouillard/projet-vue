<template>
  <div class="user">
    <UserDetails :user="this.user" />
    <UserEdit :user="this.user" />
  </div>
</template>

<script>
import UserDetails from '@/components/UserDetails.vue';
import UserEdit from '@/components/UserEdit.vue';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'User',
  components: {
    UserDetails,
    UserEdit,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    const idUser = this.$route.params.id;
    return axios(`https://ynov-front.herokuapp.com/api/users/${idUser}`).then((response) => {
      const dataUser = response.data.data;
      const user = {
        age: new Date(Date.now() - new Date(dataUser.birthDate).getTime()).getFullYear() - 1970,
        email: dataUser.email,
        phone: dataUser.phone,
        first: dataUser.firstName,
        last: dataUser.lastName,
        picture: dataUser.avatarUrl,
        gender: dataUser.gender,
        details: dataUser.details,
        /* eslint no-underscore-dangle: 0 */
        id: dataUser._id,
      };
      this.user = user;
    });
  },
};
</script>
