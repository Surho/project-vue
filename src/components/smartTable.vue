<template>
  <div class="container">
    <user-per-page-select
      v-model="usersPerPage"
      class="user-per-page"
      @perPageUpdate="resetPage"
    ></user-per-page-select>
    <user-search></user-search>
    <h1>Users list</h1>
    <user-list :users-list="usersToShow">
      <template #table-head>
        <th>#</th>
        <th>Name</th>
        <th>Lastname</th>
        <th>Balance</th>
        <th>Email</th>
      </template>
      <template #table-row="{ user }">
        <td class="user-column">{{ user.id }}</td>
        <td class="user-column">{{ user.firstName }}</td>
        <td class="user-column">{{ user.lastName }}</td>
        <td class="user-column">{{ user.balance }}</td>
        <td class="user-column">{{ user.email }}</td>
      </template>
    </user-list>
    <user-pagination v-model="currentPage" :total-pages="totalPages"></user-pagination>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import UserPerPageSelect from '@/components/UserPerPage.vue';
import UserPagination from '@/components/UserPagination.vue';
import UserSearch from '@/components/UserSearch.vue';

export default {
  components: { UserList, UserPerPageSelect, UserPagination, UserSearch },
  props: {
    users: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      usersPerPage: 5,
      currentPage: 1,
      localUsers: this.users
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalUsers / this.usersPerPage);
    },
    totalUsers() {
      return this.users.length;
    },
    usersToShow() {
      let end = this.usersPerPage * this.currentPage;
      let start = end - this.usersPerPage;
      return this.localUsers.slice(start, end);
    }
  },
  methods: {
    resetPage() {
      this.currentPage = 1;
    }
  }
};
</script>
<style>
.user-per-page {
  text-align: left;
}
</style>
