<template>
  <div>
    <div class="component-example">
      <ao-paginate
        :total-pages="totalPages"
        @paginate="paginate"/>
      <p>Current Page: {{ currentPage }}</p>
      <p>Total Pages: {{ totalPages }}</p>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model.number="totalPages"
          :type="'number'"
          :label="'Total Pages'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalPages: 3,
      currentPage: 1
    }
  },

  methods: {
    paginate (page) {
      this.currentPage = page
    }
  }
}
</script>

<style lang="scss" scoped>
.ao-pagination {
  width: fit-content !important;
}
</style>
