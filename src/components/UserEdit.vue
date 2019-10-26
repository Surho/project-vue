<template>
  <div>
    <div class="form-group user-form">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control" />
    </div>

    <div class="form-group user-form">
      <label>Фамилия</label>
      <input v-model="localUser.lastName" type="text" class="form-control" />
    </div>

    <div class="form-group user-form">
      <label>Баланс</label>
      <input v-model="localUser.balance" type="text" class="form-control" />
    </div>

    <div class="form-group user-form">
      <label>Телефон</label>
      <input v-model="localUser.phone" type="text" class="form-control" />
    </div>

    <div class="form-group user-form">
      <label>Адрес</label>
      <input v-model="localUser.address" type="text" class="form-control" />
    </div>

    <div class="form-group user-form">
      <label>Компания</label>
      <input v-model="localUser.company" type="text" class="form-control" />
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'user',
    event: 'update'
  },
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      localUser: null
    };
  },
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUserEmit'
    }
  },
  created() {
    this.updateLocalUser();
  },
  methods: {
    updateLocalUser() {
      this.localUser = Object.assign({}, this.user);
    },
    updateUserEmit() {
      this.$emit('update', Object.assign({}, this.localUser));
    }
  }
};
</script>

<style>
.user-form,
.user-data {
  text-align: left;
}
</style>
