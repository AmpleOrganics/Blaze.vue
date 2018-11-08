<template>
  <ao-table
    v-if="rows.length"
    :headers="headers"
  >
    <tr
      v-for="(row, index) in rows"
      :key="index"
    >
      <td>{{ row.name }}</td>
      <td>{{ row.description }}</td>
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
