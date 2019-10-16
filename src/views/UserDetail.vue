<template>
  <div>
    <nprogress-container></nprogress-container>
    <div class="container">
      <h1>
        User details <span class="badge badge-secondary">id: {{ userId }}</span>
      </h1>

      <div v-for="(user, name) in userData" :key="user.id">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">{{ name }}</span>
          </div>
          <input
            type="text"
            class="form-control"
            :placeholder="user"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  data: function() {
    return {
      userData: ''
    }
  },
  components: {
    NprogressContainer
  },
  computed: {
    userId: function() {
      return this.$route.params.userId
    }
  },
  methods: {
    getUser: function() {
      let self = this
      axios
        .get(`http://localhost:3000/data?id=${this.userId}`, {
          headers: { Autharization: 'authToBeAdded' }
        })
        .then(function(response) {
          self.userData = response.data[0]
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
