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
  margin: 1.25em 0
}

.title__text::before {
	content: '';
	border-left: 3px solid var(--clr-silver);
	margin-right: 0.5em;
}
</style>
