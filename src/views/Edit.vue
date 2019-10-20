<template>
  <div class="container">
    <h1>
      User details <span class="badge badge-secondary">id: {{ this.userId }}</span>
    </h1>
    <p v-if="!user" class="alert alert-warning">Loading...</p>
    <user-edit v-else v-model="user"></user-edit>

    <div class="delete-block">
      <button
        @click="showModal"
        type="button"
        class="btn btn-danger user-delete"
        :class="{ visible: !modalShown, hidden: modalShown }"
      >
        Delete user
      </button>
      <div
        class="modal-delete alert alert-danger"
        :class="{ visible: modalShown, hidden: !modalShown }"
      >
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
import UserEdit from '@/components/UserEdit.vue'
import axios from 'axios'

export default {
  components: { UserEdit },
  data() {
    return {
      user: null,
      modalShown: false
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  watch: {
    user: function() {
      this.updateUser()
    }
  },
  methods: {
    showModal() {
      this.modalShown = true
    },
    getUser: function() {
      axios
        .get(`http://localhost:3000/users/${this.userId}`, {
          headers: { Autorisation: 'authToBeAdded' }
        })
        .then(response => {
          this.user = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    updateUser: function() {
      axios.patch(`http://localhost:3000/users/${this.userId}`, this.user)
    },
    deleteUser: function() {
      axios.delete(`http://localhost:3000/users/${this.userId}`)
      this.$router.push({ name: 'Home' })
    }
  },
  mounted() {
    this.getUser()
  }
}
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
