<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    axios.get('http://localhost:3080/api/toto')
      .then((response) => {
        this.data = response.data;
      });
  },
};
</script>
