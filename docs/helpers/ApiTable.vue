<template>
  <ao-table
    v-if="rows.length"
    :headers="headers"
  >
    <tr
      v-for="(row, index) in rows"
      :key="index"
    >
      <td v-html="row.name" />
      <td>{{ row.type }}</td>
      <td class="required-column">
        <span
          v-if="row.required"
          class="md-icon__check"
        />
      </td>
      <td>{{ row.default }}</td>
      <td v-html="row.description" />
    </tr>
  </ao-table>
  <div v-else>
    There are no props for this component.
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => ([
        { field: 'name', title: 'Name', sortable: false },
        { field: 'type', title: 'Type', sortable: false },
        { field: 'required', title: 'Required', sortable: false },
        { field: 'default', title: 'Default', sortable: false },
        { field: 'description', title: 'Description', sortable: false }
      ])
    },
    rows: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
.required-column {
  font-size: 18px;
}
</style>
