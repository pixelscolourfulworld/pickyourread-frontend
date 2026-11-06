<script lang="ts" setup>
import Booklist from './components/booklist.vue'
</script>

<template>
  <header>
    <img src="/src/assets/logoB.svg" class="logo" />
    <nav class="home-nav">
      <button class="nav-button">1 Button</button>
      <button class="nav-button">2 Button</button>
      <button class="nav-button">Button 3</button>
      <button class="nav-button">Button 4</button>
    </nav>
  </header>
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
