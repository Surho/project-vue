<template>
  <div class="container">
    <user-per-page-select v-model="usersPerPage" @perPageUpdate="resetPage"></user-per-page-select>
    <h1>Users list</h1>
    <user-list
      :users-list="usersList"
      :current-page="currentPage"
      :users-per-page="usersPerPage"
    ></user-list>
    <user-pagination v-model="currentPage" :pages="totalPages"></user-pagination>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import UserPerPageSelect from '@/components/UserPerPage.vue';
import UserPagination from '@/components/UserPagination.vue';
import axios from 'axios';

export default {
  components: { UserList, UserPerPageSelect, UserPagination },
  data() {
    return {
      totalUsers: 0,
      usersPerPage: 5,
      currentPage: 1,
      usersList: []
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalUsers / this.usersPerPage);
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    resetPage() {
      this.currentPage = 1;
    },
    getUsers: function() {
      axios
        .get('http://localhost:3000/users', { headers: { Authorization: 'authToBeAdded' } })
        .then(response => {
          console.log(`request status - ${response.status}`);
          this.totalUsers = response.data.length;
          this.usersList = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
