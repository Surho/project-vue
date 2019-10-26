<template>
  <div class="container">
    <h1>
      User details <span class="badge badge-secondary">id: {{ this.userId }}</span>
    </h1>
    <p v-if="!user" class="alert alert-warning">Loading...</p>
    <user-form v-else v-model="user"></user-form>

    <div v-if="user" class="delete-block">
      <button
        type="button"
        class="btn btn-danger user-delete"
        :class="modalShown ? 'hidden' : 'visible'"
        @click="modalShown = true"
      >
        Delete user
      </button>
      <div class="modal-delete alert alert-danger" :class="modalShown ? 'visible' : 'hidden'">
        <p>Are you sure?</p>
        <button type="button" class="btn btn-danger btn-delete" @click="deleteUser">Yes</button>
        <button type="button" class="btn btn-danger btn-delete" @click="modalShown = false">
          No
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import UserForm from '@/components/UserForm.vue';
import axios from '@/axios';

export default {
  components: { UserForm },
  data() {
    return {
      user: null,
      modalShown: false
    };
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  watch: {
    user: 'updateUser'
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser: function() {
      axios
        .get(`/users/${this.userId}`)
        .then(response => {
          this.user = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateUser: function() {
      axios.patch(`/users/${this.userId}`, this.user).catch(error => console.log(error));
    },
    deleteUser: function() {
      axios
        .delete(`/users/${this.userId}`)
        .then(response => {
          if (response.status === 200) this.$router.push({ name: 'Home' });
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="scss">
.delete-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.modal-delete {
  width: 300px;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}

.btn-delete {
  margin-left: 5px;
  margin-right: 5px;
  min-width: 60px;
}

.user-delete {
  width: 150px;
  margin-bottom: 10px;
}
</style>
