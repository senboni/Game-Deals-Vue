<template>
  <div class="title__text" :style="{ 'font-size': fontSize}">
    {{text}}
  </div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		text: String,
		fontSize: String
	}
}
</script>

<style scoped>
.title__text {
  font-weight: 600;
  color: var(--clr-light__gray);
  margin: 3rem 0 2rem 0;
  padding: 0 1rem;
}

.title__text::before {
	content: '';
	border-left: 3px solid var(--clr-silver);
	margin-right: 0.5em;
}
</style>
