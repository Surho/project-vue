<template>
  <div class="container">
    <h1>
      User details <span class="badge badge-secondary">id: {{ this.userId }}</span>
    </h1>
    <p v-if="!user" class="alert alert-warning">Loading...</p>
    <user-form v-else v-model="user"></user-form>

    <button @click="saveUser">Save user</button>

    <div v-if="user" class="delete-block">
      <button @click="goToNext">next user</button>
      <button @click="goToPrevious">previous user</button>
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
      users: null,
      user: null,
      userIndex: null,
      currentIdIndex: null,
      modalShown: false
    };
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    nextUserId() {
      if (this.users[this.userIndex + 1]) {
        return this.users[this.userIndex + 1].id;
      } else {
        return null;
      }
    },
    previousUserId() {
      if (this.users[this.userIndex - 1]) {
        return this.users[this.userIndex - 1].id;
      } else {
        return null;
      }
    }
  },
  watch: {
    $route() {
      this.getUser(this.userId);
    },
    users() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.user.id) {
          this.userIndex = i;
          break;
        } else {
          this.userIndex = null;
        }
      }
    }
  },
  created() {
    this.getUser(this.userId);
  },
  methods: {
    getUsers() {
      return new Promise(resolve => {
        axios.get('/users/').then(response => {
          this.users = response.data;
          resolve(this.users);
        });
      });
    },
    getUser: function(id) {
      axios
        .get(`/users/${id}`)
        .then(response => {
          this.user = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveUser: function() {
      axios.patch(`/users/${this.userId}`, this.user).catch(error => console.log(error));
      this.redirectHome();
    },
    deleteUser: function() {
      axios
        .delete(`/users/${this.userId}`)
        .then(response => {
          if (response.status === 200) this.redirectHome();
        })
        .catch(error => console.log(error));
    },
    goToNext: function() {
      this.getUsers().then(() => {
        if (this.nextUserId) this.$router.push({ path: `/UserEdit/${this.nextUserId}` });
      });
    },
    goToPrevious: function() {
      this.getUsers().then(() => {
        if (this.previousUserId) this.$router.push({ path: `/UserEdit/${this.previousUserId}` });
      });
    },
    redirectHome() {
      this.$router.push({ name: 'Home' });
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
