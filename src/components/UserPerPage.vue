<template>
  <div>
    <p>Show users per page</p>
    <select @change="sendPerPageEvt" class="custom-select user-per-page">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usersPerPage: 5
    }
  },
  methods: {
    sendPerPageEvt(evt) {
      let selected = evt.target.value
      this.$emit('perPageUpdate', +selected)
    }
  }
}
</script>

<style>
.user-per-page {
  width: 300px;
}
</style>
