<script setup>
import {onMounted} from 'vue'

onMounted(() => {
    console.log('done')
})

</script>

<template>
    <div>
        <h1>Home</h1>
        <router-link to="/about">Go to About</router-link>
    </div>
</template>

<style scoped>

</style>
