<template>
    <nav>
        <router-link to="/writers">Writers</router-link> |
        <router-link to="/books">Books</router-link>
    </nav>
    <router-view />
</template>
<script setup lang="ts">
// No hay lógica adicional 
</script>
<style>
nav {
    padding: 1rem;
    background: #eee;
}

nav a {
    margin-right: 1rem;
    color: #333;
    text-decoration: none;
}

nav a.router-link-active {
    font-weight: bold;
}
</style>