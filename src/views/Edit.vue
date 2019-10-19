<template>
  <div class="container">
    <h1>
      User details <span class="badge badge-secondary">id: {{ this.userId }}</span>
    </h1>
    <user-edit :user="user" @update="user = $event"></user-edit>
  </div>
</template>
<script>
import UserEdit from '@/components/UserEdit.vue'
import axios from 'axios'

export default {
  components: { UserEdit },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  methods: {
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
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>
