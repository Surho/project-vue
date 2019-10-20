<template>
  <div class="container">
    <user-per-page-select @perPageUpdate="updatePerPage"></user-per-page-select>
    <h1>Users list</h1>
    <user-list @usersLoaded="saveTotalUsers" :usersInterval="usersInterval"></user-list>
    <user-pagination :pages="totalPages" @pageChange="saveCurrentPage"></user-pagination>
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
      let pagesCount = Math.ceil(this.totalUsers / this.usersPerPage)
      return pagesCount
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
    updatePerPage(users) {
      this.usersPerPage = users
      this.currentPage = 1
    },
    saveCurrentPage(page) {
      this.currentPage = page
    }
  }
}
</script>
