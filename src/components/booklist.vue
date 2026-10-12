<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { getBooks } from './fetchBooks'

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

var books: Book[] = []
await getBooks().then((result) => (books = result))
</script>

<template>
  <ul>
    <li v-for="book in books">{{ book.title }} by {{ book.author }}</li>
  </ul>
</template>
