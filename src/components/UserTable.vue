<template id="userList">
  <div class="container">
    <h1>Users list</h1>
    <table class="table table-bordered table-sm">
      <thead class="table-dark">
        <tr>
          <th v-for="(item, heading) in tableHeading" :key="heading">{{ heading }}</th>
        </tr>
      </thead>
      <tbody>
        <router-link
          tag="tr"
          :to="{ name: 'UserDetail', params: { userId: user.id } }"
          v-for="user in list"
          :key="user.id"
          class="user-row"
        >
          <td class="user-column" v-for="data in user" :key="data.name">
            <ul v-if="isObj(data)">
              <li v-for="(item, name) in data" :key="name">{{ name }} : {{ item }}</li>
            </ul>
            <p>{{ data }}</p>
          </td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  template: '#userList',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    tableHeading: function() {
      return this.list[0]
    }
  },
  methods: {
    isObj: function(data) {
      return typeof data === 'object'
    }
  }
}
</script>

<style lang="scss">
.user-column {
  max-width: 150px;
  word-break: break-word;
}

.user-row {
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
}
</style>
