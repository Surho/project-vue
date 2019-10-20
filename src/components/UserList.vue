<template>
  <table class="table table-bordered table-sm">
    <thead class="table-dark">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Lastname</th>
        <th>Active</th>
        <th>Balance</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Registered</th>
      </tr>
    </thead>
    <tbody>
      <router-link
        tag="tr"
        :to="{ name: 'Edit', params: { userId: user.id } }"
        v-for="user in interval"
        :key="user.id"
        class="user-row"
      >
        <td class="user-column">{{ user.id }}</td>
        <td class="user-column">{{ user.firstName }}</td>
        <td class="user-column">{{ user.lastName }}</td>
        <td class="user-column">{{ user.isActive }}</td>
        <td class="user-column">{{ user.balance }}</td>
        <td class="user-column">{{ user.email }}</td>
        <td class="user-column">{{ user.phone }}</td>
        <td class="user-column">{{ user.registered }}</td>
      </router-link>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'
// import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  props: {
    usersInterval: {
      type: Array
    }
  },
  data: function() {
    return {
      list: []
    }
  },
  components: {},
  methods: {
    getUsers: function() {
      axios
        .get('http://localhost:3000/users', { headers: { Authorization: 'authToBeAdded' } })
        .then(response => {
          console.log(`request status - ${response.status}`)
          this.$emit('usersLoaded', response.data.length)
          this.list = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
  computed: {
    interval() {
      let start = this.usersInterval[0]
      let end = this.usersInterval[1]
      return this.list.slice(start, end)
    }
  },
  mounted: function() {
    this.getUsers()
  }
}
</script>
<style lang="scss">
.user-row {
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
}
</style>
