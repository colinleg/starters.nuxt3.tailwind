<script setup lang="ts">
import { ref } from 'vue'
    const title = ref<string>('Starter Minimal Nuxt 3 + Tailwind')
</script>

<template>
    <div class="">
        <h1> {{ title  }}</h1>
        <hello></hello>
    </div>
</template>

<style lang="css" scoped>

</style>