<template>
  <div>
    <user-form v-model="user"></user-form>
    <button type="button" class="btn btn-primary" @click="addUser">Add user</button>
  </div>
</template>
<script>
import axios from '@/axios';
import UserForm from './UserForm';

export default {
  components: { UserForm },
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
        registered: ''
      }
    };
  },
  methods: {
    addUser() {
      axios.post(`/users/`, this.user);
    }
  }
};
</script>
<style>
.form-add {
  text-align: left;
}
</style>
