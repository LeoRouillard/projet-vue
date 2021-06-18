<template>
  <div id="app">
    <div
      v-if="notification"
      :class="`bg-${notification.type}`"
      class="alert"
    >
      {{ notification.message }}
    </div>

    <router-view @notification="showNotification" />
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App',
  data() {
    return {
      notification: {},
    };
  },
  methods: {
    showNotification(notification) {
      this.notification = notification;
      setTimeout(() => {
        this.notification = null;
      }, 5000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
