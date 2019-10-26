<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" @click="switchPrevious">
        <a class="page-link page-link-previous">Previous</a>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: pageSelected === page }"
        @click="pageChange(page)"
      >
        <a class="page-link">{{ page }}</a>
      </li>
      <li class="page-item" @click="switchNext"><a class="page-link page-link-next">Next</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  model: {
    prop: 'pageSelected',
    event: 'pageChange'
  },
  props: {
    pages: {
      type: Number
    }
  },
  data() {
    return {
      pageSelected: 1,
      activePage: 1
    };
  },
  methods: {
    pageChange(page) {
      this.pageSelected = page;
      this.$emit('pageChange', this.pageSelected);
    },
    switchNext() {
      if (this.pageSelected === this.pagesArr.length) return;
      this.pageSelected += 1;
      this.$emit('pageChange', this.pageSelected);
    },
    switchPrevious() {
      if (this.pageSelected === 1) return;
      this.pageSelected -= 1;
      this.$emit('pageChange', this.pageSelected);
    }
  }
};
</script>

<style>
.page-item {
  cursor: pointer;
}
</style>
