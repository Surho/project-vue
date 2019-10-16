<template id="userList">
  <div>
    <nprogress-container></nprogress-container>
    <user-table :list="list"></user-table>
  </div>
</template>

<script>
import axios from 'axios'
import userTable from '../components/UserTable.vue'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  data: function() {
    return {
      list: []
    }
  },
  components: {
    'user-table': userTable,
    NprogressContainer
  },
  methods: {
    getUsers: function() {
      axios
        .get('http://localhost:3000/data', { headers: { Autharization: 'authToBeAdded' } })
        .then(response => {
          console.log(`request status - ${response.status}`)
          this.list = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
  mounted: function() {
    this.getUsers()
  }
}
</script>
