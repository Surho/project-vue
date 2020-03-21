<template>
  <smart-table :users="users"></smart-table>
</template>

<script>
import smartTable from '@/components/smartTable.vue';
import axios from '@/axios.js';

export default {
  components: {
    smartTable
  },
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers: function() {
      axios
        .get('/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
