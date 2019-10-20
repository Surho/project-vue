<template>
  <div>
    <div class="form-group user-form">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.firstName" />
    </div>

    <div class="form-group user-form">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName" />
    </div>

    <div class="form-group user-form">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="localUser.balance" />
    </div>

    <div class="form-group user-form">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="localUser.phone" />
    </div>

    <div class="form-group user-form">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="localUser.address" />
    </div>

    <div class="form-group user-form">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="localUser.company" />
    </div>

    <!--    <pre class="user-data">{{ localUser }}</pre>-->
    <!--    <pre class="user-data">{{ user }}</pre>-->
  </div>
</template>

<script>
// import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  data() {
    return {
      localUser: null
    }
  },
  props: {
    user: {
      type: Object
    }
  },
  model: {
    prop: 'user',
    event: 'update'
  },
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUserEmit'
    }
  },
  created() {
    this.updateLocalUser()
  },
  methods: {
    updateLocalUser() {
      this.localUser = Object.assign({}, this.user)
    },
    updateUserEmit() {
      this.$emit('update', Object.assign({}, this.localUser))
    }
  }
}
</script>

<style>
.user-form,
.user-data {
  text-align: left;
}
</style>
