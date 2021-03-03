<template>
    <footer>
        <p>
            Game Deals ©
            <a href="https://apidocs.cheapshark.com/" target="_blank">
                CheapShark
            </a>
            2021
        </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;

    background: var(--clr-dark__white);
    margin: 2rem 0 0 0;
    padding: 4rem 0;

    color: var(--clr-light__gray);
    font-weight: 400;
    word-spacing: 0.25rem;
}

p {
    display: inline-block;
    margin: 0;
}

a {
    color: var(--clr-gray);
}

a:hover {
    color: var(--clr-purple);
}
</style>
