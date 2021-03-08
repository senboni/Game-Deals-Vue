<template>
  <div class="title__text">
    {{text}}
  </div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		text: String
	}
}
</script>

<style scoped>
.title__text {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--clr-light__gray);
  margin: 2rem 0 1.5rem 0;
  padding: 0 0.5rem;
}

.title__text::before {
	content: '';
	border-left: 3px solid var(--clr-silver);
	margin-right: 0.5em;
}
</style>
