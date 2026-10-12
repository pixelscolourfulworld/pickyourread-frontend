<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { getBooks } from './components/fetchBooks'
import Booklist from './components/booklist.vue'

interface Book {
  title: string
  author: string
  isbn: string
  desc: string
  publisher: string
  apiKey: string
  series: string
  cover: string
}
</script>

<template>
  <h1>Books</h1>

  <Suspense>
    <Booklist />

    <template #fallback>
      <ul>
        loading books
      </ul>
    </template>
  </Suspense>
</template>
