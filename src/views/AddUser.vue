<template>
  <div class="container">
    <nprogress-container></nprogress-container>
    <h1>User details <span class="badge badge-secondary">Add user</span></h1>

    <div v-for="fieldName in fieldNames" :key="fieldName">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">{{ fieldName }}</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
    <button type="button" class="btn btn-primary">Add user</button>
  </div>
</template>
<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  data() {
    return {
      fieldNames: ['firstName', 'lastName', 'age', 'company', 'email', 'phone']
    }
  },
  components: {
    NprogressContainer
  }
}
</script>
