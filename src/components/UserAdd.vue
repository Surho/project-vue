<template>
  <div class="form-add">
    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">First name</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.firstName" />
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Last Name</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.lastName" />
    </div>

    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="isActive" v-model="user.isActive" />
      <label class="form-check-label" for="isActive">Is active</label>
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Balance</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.balance" />
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Email</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.email" />
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Phone</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.phone" />
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Age</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.age" />
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Access level</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.accessLevel" />
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Company</span>
      </div>
      <input type="text" class="form-control" placeholder="" v-model="user.company" />
    </div>

    <div class="input-group mb-3 input-add">
      <div class="input-group-prepend">
        <span class="input-group-text">Image</span>
      </div>
      <input type="text" class="form-control" placeholder="" />
    </div>

    <button type="button" class="btn btn-primary" @click="addUser">Add user</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      fieldNames: ['firstName', 'lastName', 'age', 'company', 'email', 'phone'],
      user: {
        id: 0,
        isActive: '',
        balance: '',
        picture: '',
        age: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        about: '',
        accessLevel: '',
        registered: Date.now()
      }
    }
  },
  methods: {
    addUser() {
      axios.post(`http://localhost:3000/users/`, this.user)
    }
  }
}
</script>
<style>
.form-add {
  text-align: left;
}
</style>
