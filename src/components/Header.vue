<template>
    <div id="nav">
        <router-link to="/">Game Deals</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about">Something</router-link>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
#nav {
    padding: 1em 0;
    font-size: 1.25rem;
    font-weight: 800;
}

a {
    color: var(--clr-black);
    margin-right: 1em;
}

a:last-child {
    margin-right: 0;
}

a.router-link-exact-active {
    color: #5900ff;
}
</style>
