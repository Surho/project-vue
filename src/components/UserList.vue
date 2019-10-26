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
        v-for="user in interval"
        :key="user.id"
        tag="tr"
        :to="{ name: 'Edit', params: { userId: user.id } }"
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
export default {
  components: {},
  props: {
    usersList: {
      type: Array,
      default() {
        return [];
      }
    },
    usersPerPage: {
      type: Number,
      default: 5
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    interval() {
      let end = this.usersPerPage * this.currentPage;
      let start = end - this.usersPerPage;
      return this.usersList.slice(start, end);
    }
  }
};
</script>
<style lang="scss">
.user-row {
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
}
</style>
