<template>
  <table class="table table-bordered table-sm">
    <thead class="table-dark">
      <tr>
        <slot name="table-head"></slot>
      </tr>
    </thead>
    <tbody>
      <router-link
        v-for="user in usersList"
        :key="user.id"
        tag="tr"
        :to="{ name: 'Edit', params: { userId: user.id } }"
        class="user-row"
      >
        <slot name="table-row" :user="user"></slot>
      </router-link>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    usersList: {
      type: Array,
      default() {
        return [];
      }
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
