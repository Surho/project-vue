<template>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link page-link-previous"
          :class="{ disabled: pageSelected === 1 }"
          @click="switchPrevious"
        >
          Previous
        </a>
      </li>
      <li
        v-for="page in totalPages"
        :key="page"
        class="page-item"
        :class="{ active: pageSelected === page }"
      >
        <a class="page-link" @click="pageChange(page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a
          class="page-link page-link-next"
          :class="{ disabled: pageSelected === totalPages }"
          @click="switchNext"
          >Next</a
        >
      </li>
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
    totalPages: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pageSelected: 1
    };
  },
  methods: {
    pageChange(page) {
      this.pageSelected = page;
      this.$emit('pageChange', this.pageSelected);
    },
    switchNext() {
      if (this.pageSelected === this.totalPages) return;
      this.pageChange(this.pageSelected + 1);
    },
    switchPrevious() {
      if (this.pageSelected === 1) return;
      this.pageChange(this.pageSelected - 1);
    }
  }
};
</script>

<style lang="scss">
.page-item {
  cursor: pointer;
}
.disabled {
  cursor: not-allowed;

  &:hover {
    background-color: transparent;
  }
}
</style>
