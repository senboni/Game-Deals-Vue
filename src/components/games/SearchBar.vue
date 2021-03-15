<template>
  	<label>Search for a Game</label>
	<div class="search__input">
		<input
			@keyup.enter="submitSearch"
			v-model="searchInput" 
			placeholder="Type something..." 
		/>
		<button 
			@click="submitSearch"
			v-if="inputValid"
		>
			<i class="fas fa-arrow-right"></i>
		</button>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	emits: ['submit-search'],
	data() {
		return {
			searchInput: ""
		}
	},
	methods: {
		toggleInput() {
			this.searchInput = !this.searchInput
		},
		submitSearch() {
			if(this.inputValid === true) {
				this.$emit('submit-search', this.searchInput)
				this.searchInput = ""
			}
		}
	},
	computed: {
		inputValid() {
			return this.searchInput.length > 0
		}
	}
}
</script>

<style scoped>
label {
	display: block;
	text-align: center;
	margin: 2em auto 1em auto;
	font-size: 1.15rem;
	font-weight: 400;
	color: var(--clr-light__gray);
}

input {
	display: block;
	padding: 0.75em 1.5em;
	z-index: 1;

	width: 80vw;
	max-width: 20rem;
	border: 2px solid transparent;
	border-radius: 999px;

	background: var(--clr-dark__white);
	color: var(--clr-gray);
	font-size: 1.25rem;
	font-weight: 600;
}

input:focus {
	outline: none;
	border: 2px solid var(--clr-silver);
}

input::placeholder {
	font-weight: 400;
	color: var(--clr-silver);
}

*[data-theme=dark] input:focus {
	border: 2px solid #404144;
}

*[data-theme=dark] input::placeholder {
	color: #404144;
}

.search__input {
	display: flex;
	justify-content: center;
	align-items: center;
}

.search__input button {
	height: 2.5em;
	width: 2.5em;
	border: none;
	border-radius: 999px;
	outline: none;
	padding: 0.75rem;
	margin-left: 0.25rem;

	font-size: 1.25rem;
	color: var(--clr-purple);
	background: transparent;

	animation: slideInSearch 0.3s ease-out;
}

button:hover {
	cursor: pointer;
	background: var(--clr-silver);
}

*[data-theme=dark] button:hover {
	background: #404144;
}

@media (min-width: 760px) {
	label {
		text-align: inherit;
		margin-left: 0.5rem;
	}

	.search__input {
		justify-content: start;
	}
}
</style>
