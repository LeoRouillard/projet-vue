<template>
  <!-- Modal -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <button
                class="modal-default-button"
                @click="closeModal"
              >
                X
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <Form
              :initial-values="user"
              @submit="createUser"
              @cancel="closeModal"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Form from '@/components/Form.vue';
import axios from 'axios';

export default {
  components: {
    Form,
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.$emit('closeModal');
      }
    });
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    async createUser(newUser) {
      /* eslint no-underscore-dangle: 0 */
      /*eslint-disable */
      await axios.post(`https://ynov-front.herokuapp.com/api/users`, newUser)
        .then(() => {
          this.$emit('notification', { type: 'success', message: 'Utilisateur crée' });
          this.$emit('closeModal');
          this.$emit('fetchUsers');
        })
        .catch((error) => {
          console.log(error)
          this.$emit('notification', { type: 'danger', message: error.message });
        });
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-header {
  justify-content: flex-end!important;
}
.modal-default-button {
  float: right;
}
.image{
  width: 100%!important;
  height: 100%;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
