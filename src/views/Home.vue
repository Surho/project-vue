<template>
  <div class="container">
    <user-per-page-select @perPageUpdate="resetPage" v-model="usersPerPage"></user-per-page-select>
    <h1>Users list</h1>
    <user-list
      @usersLoaded="saveTotalUsers"
      :currentPage="currentPage"
      :usersPerPage="usersPerPage"
    ></user-list>
    <user-pagination :pages="totalPages" v-model="currentPage"></user-pagination>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import UserPerPageSelect from '@/components/UserPerPage.vue'
import UserPagination from '@/components/UserPagination.vue'

export default {
  components: { UserList, UserPerPageSelect, UserPagination },
  data() {
    return {
      totalUsers: 0,
      usersPerPage: 5,
      currentPage: 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalUsers / this.usersPerPage)
    },
    usersInterval() {
      let start, end
      end = this.usersPerPage * this.currentPage
      start = end - this.usersPerPage
      return [start, end]
    }
  },
  methods: {
    saveTotalUsers(usersCount) {
      this.totalUsers = usersCount
    },
    resetPage() {
      this.currentPage = 1
    }
  }
}
</script>
