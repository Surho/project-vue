<template>
  <div class="container">
    <h1>Users list</h1>
    <user-list></user-list>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
export default {
  components: { UserList }
}
</script>
