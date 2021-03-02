<template>
    <header>
        <nav>
            <router-link to="/">Game Deals</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/help">Help</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    padding: 1rem;
    font-size: 1.25rem;
    font-weight: 800;
}

nav {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
}

nav a {
    color: var(--clr-black);
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 1rem;
}

nav a:last-child {
    margin-right: 0;
}

nav a.router-link-exact-active {
    color: var(--clr-purple);
}
</style>
