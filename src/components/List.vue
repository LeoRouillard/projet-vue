<template>
  <div class="list">
    <table id="tbl-users" class="table table-hover">
      <thead>
        <tr>
          <th>Image de profil</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Genre</th>
          <th><button @click="sortAge()">Age</button></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.email"
          v-for="user in sortFilter"
          @click="$router.push({name: 'User', params: {'id': user.id}})"
        >
          <td><img style="height:75px" :src="user.picture" /></td>
          <td v-html="user.nameFormated">
            {{ user.first }} {{ user.last }}
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      sortDirection: '',
    };
  },
  props: {
    filteredlist: Array,
  },
  methods: {
    sortAge() {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
        return;
      }
      if (this.sortDirection === 'desc') {
        this.sortDirection = '';
        return;
      }
      this.sortDirection = 'asc';
    },
  },
  computed: {
    sortFilter() {
      return [...this.filteredlist].sort((user1, user2) => {
        const modifier = this.sortDirection === 'asc' ? 1 : -1;
        return modifier * (user1.age - user2.age);
      });
    },
  },
};
</script>
