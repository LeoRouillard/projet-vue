<template>
  <div>
    <Header
      v-model="gender"
      @fetchUsers="fetchUsers"
      :userFiltered="filteredList.length"
      :userNonFiltered="users.length"
      @name="recherche"
      @notification="showNotification"
    />
    <List
      :filteredlist="filteredList"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import List from '@/components/List.vue';

import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'Home',
  components: {
    Header,
    List,
  },
  data() {
    return {
      users: [],
      gender: 'all',
      name: '',
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      return axios('https://ynov-front.herokuapp.com/api/users').then((response) => {
        const data = response.data.data.map((user) => ({
          age: new Date(Date.now() - new Date(user.birthDate).getTime()).getFullYear() - 1970,
          email: user.email,
          phone: user.phone,
          first: user.firstName,
          last: user.lastName,
          picture: user.avatarUrl,
          gender: user.gender,
          details: user.details,
          /* eslint no-underscore-dangle: 0 */
          id: user._id,
        }));
        this.users = data;
      });
    },
    recherche(value) {
      this.name = value;
    },
    showNotification(notification) {
      this.$emit('notification', notification);
    },
  },
  computed: {
    filteredList() {
      return this.users.filter((user) => {
        if (this.gender === 'all') return true;
        return user.gender === this.gender;
      }).filter((user) => {
        if (this.name) {
          const name = `${user.first} ${user.last}`;
          return this.searchWord.every((elem) => name.toLowerCase().includes(elem));
        }
        return true;
      }).map((user) => {
        const name = `${user.first} ${user.last}`;
        const nameFormated = this.searchWord.length ? name.replace(
          new RegExp(this.searchWord.join('|'), 'gi'),
          "<span style='background-color:red'>$&</span>",
        ) : name;
        return { ...user, nameFormated };
      });
    },
    searchWord() {
      if (!this.name.length) { return []; }
      return this.name.toLowerCase().split(' ');
    },
  },
};

</script>
