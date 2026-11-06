<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { getBooks } from './fetchBooks'
import { AgGridVue } from 'ag-grid-vue3'

let books
await getBooks().then((result) => (books = result))

const gridOptions = {
  columnDefs: [{ field: 'cover' }, { field: 'title' }],
  rowData: books,
  loadingRows: true,
}
</script>

<template>
  <ag-grid-vue :grid-options="gridOptions" style="width: auto-fill; height: 500px"></ag-grid-vue>
</template>
