<template>
  <div class="table-area table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th
            v-for="columnHeader in headers"
            :key="columnHeader.field"
            @click="sortByHeader(columnHeader.field)"
          >
            {{ columnHeader.title }}
          </th>
        </tr>
      </thead>
      <tbody :class=" { clickable: isClickable }">
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AoTable',
  props: {
    headers: {
      type: Array,
      required: false,
      default: null
    },

    isClickable: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      sortBy: null,
      reverse: false,
      lastSelectedHeader: null
    }
  },

  methods: {
    sortByHeader (header) {
      if (header === this.lastSelectedHeader) {
        this.reverse = !this.reverse
      } else {
        this.lastSelectedHeader = header
        this.reverse = false
        this.sortBy = header
      }
      this.$emit('sortTable', this.sortBy, this.reverse)
    }
  }
}
</script>

<style lang="scss" scoped>
.table-container {
  border: 1px solid #dcdedf;
}

.table-header {
  margin-bottom: 15px;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 15px 0px 15px;
  border-bottom: 1px solid #dcdedf;

  & > *:first-child {
    margin-left: 0;
  }

  & > * {
    margin-left: 7.5px;
  }

  & > h3 {
    font-size: 28px;
    font-weight: 200;
    line-height: 1.1;
    margin: 0;
    color: #474a4c;
    float: left;
    display: inline-block;
  }
}

.table-toolbar {
  flex-grow: 1;
  display: inline-flex;
  align-content: center;
  justify-content: flex-end;

  & .form-control {
    display: inline-block;
  }
}

.table-area {
  border-top: 0px;
}

.table-responsive {
  overflow-x: auto;
  min-height: 0.01%;
}

.table {
  font-size: 14px;
  margin-bottom: 5px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 22px;
  background: transparent;

  & thead > tr > th {
    color: #474a4c;
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    padding: 8px;
    line-height: 1.4;
    cursor: pointer;
  }

  & th > a {
    color: #474a4c;
    border-bottom: 1px dotted #474a4c;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

tbody.pointer > tr {
  cursor: pointer;
}

table > tbody /deep/ tr > td {
  color: #474a4c;
  padding: 8px;
  line-height: 1.4;
  vertical-align: top;
  border-top: 1px solid #ddd;
}

th {
  text-align: left;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f7f7f9;
}

.clickable {
  cursor: pointer;
}
</style>
