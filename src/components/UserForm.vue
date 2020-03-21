<template>
  <div>
    <div class="form-group user-form">
      <label>isActive</label>
      <input
        v-model="localUser.isActive"
        type="checkbox"
        class="form-control"
        @input="updateUserEmit"
      />
    </div>

    <div class="form-group user-form">
      <label>Balance</label>
      <input v-model="localUser.balance" type="text" class="form-control" @input="updateUserEmit" />
    </div>

    <div class="form-group user-form">
      <label>Picture</label>
      <input v-model="localUser.picture" type="text" class="form-control" @input="updateUserEmit" />
    </div>

    <div class="form-group user-form">
      <label>Age</label>
      <input v-model="localUser.age" type="text" class="form-control" @input="updateUserEmit" />
    </div>

    <div class="form-group user-form">
      <label>First Name</label>
      <input
        v-model="localUser.firstName"
        type="text"
        class="form-control"
        @input="updateUserEmit"
      />
    </div>

    <div class="form-group user-form">
      <label>Last Name</label>
      <input
        v-model="localUser.lastName"
        type="text"
        class="form-control"
        @input="updateUserEmit"
      />
    </div>

    <div class="form-group user-form">
      <label>Company</label>
      <input v-model="localUser.company" type="text" class="form-control" @input="updateUserEmit" />
    </div>

    <div class="form-group user-form">
      <label>Email</label>
      <input v-model="localUser.email" type="text" class="form-control" @input="updateUserEmit" />
    </div>

    <div class="form-group user-form">
      <label>Phone</label>
      <input v-model="localUser.phone" type="text" class="form-control" @input="updateUserEmit" />
    </div>

    <div class="form-group user-form">
      <label>Biography</label>
      <input v-model="localUser.about" type="text" class="form-control" @input="updateUserEmit" />
    </div>

    <div class="form-group user-form">
      <label>Accsess Level</label>
      <input
        v-model="localUser.accessLevel"
        type="text"
        class="form-control"
        @input="updateUserEmit"
      />
    </div>

    <div class="form-group user-form">
      <label>Company</label>
      <input
        v-model="localUser.registered"
        type="text"
        class="form-control"
        @input="updateUserEmit"
      />
    </div>

    <div class="form-group user-form">
      <text-editor></text-editor>
    </div>
  </div>
</template>

<script>
import textEditor from './textEditor';

export default {
  components: {
    textEditor
  },
  model: {
    prop: 'user',
    event: 'update'
  },
  props: {
    user: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      localUser: null
    };
  },
  watch: {
    user: function() {
      this.updateLocalUser();
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
