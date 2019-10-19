<template>
  <div class="container">
    <h1>User details <span class="badge badge-secondary">Add user</span></h1>
    <user-add></user-add>
  </div>
</template>
<script>
import UserAdd from '@/components/UserAdd.vue'
export default {
  components: { UserAdd }
}
</script>
