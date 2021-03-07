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
    font-size: 1.25rem;
    font-weight: 800;
}

@media (min-width: 960px) {
	header {
		max-width: 960px;
		margin: 0 auto;
		padding: 0 1rem;
	}
}

nav {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;

    margin: 0.75rem 0;
}

nav a {
    color: var(--clr-light__gray);
    overflow: hidden;
    text-overflow: ellipsis;

    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
}

nav a:last-child {
    margin-right: 0;
}

nav a:hover {
    background: var(--clr-dark__white);
    color: var(--clr-gray);
}

nav a.router-link-exact-active {
    color: var(--clr-purple);
}
</style>
