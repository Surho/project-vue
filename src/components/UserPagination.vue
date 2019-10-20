<template>
  <nav>
    <ul class="pagination">
      <li class="page-item"><a class="page-link page-link-previous">Previous</a></li>
      <li class="page-item" v-for="page in pagesArr" :key="page" @click="pageChangeEmit">
        <a class="page-link" :data-page="page">{{ page }}</a>
      </li>
      <li class="page-item"><a class="page-link page-link-next">Next</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    pages: {
      type: Number
    }
  },
  computed: {
    pagesArr: function() {
      let pagesArr = []
      for (let i = 1; i <= this.pages; i++) {
        pagesArr.push(i)
      }
      return pagesArr
    }
  },
  methods: {
    pageChangeEmit(evt) {
      this.$emit('pageChange', +evt.target.dataset.page)
    }
  }
}
</script>

<style>
.page-item {
  cursor: pointer;
}
</style>
