<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" @click="switchPrevious">
        <a class="page-link page-link-previous">Previous</a>
      </li>
      <li
        class="page-item"
        :class="{ active: pageSelected === page }"
        v-for="page in pagesArr"
        :key="page"
        @click="pageChangeEmit"
      >
        <a class="page-link" :data-page="page">{{ page }}</a>
      </li>
      <li class="page-item" @click="switchNext"><a class="page-link page-link-next">Next</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      pageSelected: 1,
      activePage: 1
    }
  },
  props: {
    pages: {
      type: Number
    }
  },
  model: {
    prop: 'pageSelected',
    event: 'pageChange'
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
      this.pageSelected = +evt.target.dataset.page
      this.$emit('pageChange', this.pageSelected)
    },
    switchNext() {
      if (this.pageSelected === this.pagesArr.length) return
      this.pageSelected += 1
      this.$emit('pageChange', this.pageSelected)
    },
    switchPrevious() {
      if (this.pageSelected === 1) return
      this.pageSelected -= 1
      this.$emit('pageChange', this.pageSelected)
    }
  }
}
</script>

<style>
.page-item {
  cursor: pointer;
}
</style>
