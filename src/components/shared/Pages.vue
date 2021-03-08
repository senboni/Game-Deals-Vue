<template>
	<div class="container">
		<div @click="gotoPage(1)" :class="[1 == currentPage ? 'current-page' : '', 'number']">
			{{1}}
		</div>

		<div v-if="notCloseToFirstPage" class="dots">...</div>

		<template v-for="number in numberOptions" :key="number">
			<div v-if="isInPagesSpan(number)" 
				@click="gotoPage(number)"
				:class="[number == currentPage ? 'current-page' : '', 'number']"
			>
				{{number}}
			</div>
		</template>

		<div v-if="notCloseToLastPage" class="dots">...</div>

		<div :class="[numberOfPages == currentPage ? 'current-page' : '', 'number']"
			@click="gotoPage(numberOfPages)"
		>
			{{numberOfPages}}
		</div>

		<label for="enterPageInput">Enter Page</label>
		<input id="enterPageInput"
			type="number" min="1" :max="numberOfPages"
			v-model.number="inputPageNumber"
			@keyup.enter="enterInputPage(inputPageNumber)"
		/>
		<button v-if="isInFullPagesSpan(inputPageNumber)" 
			@click="enterInputPage(inputPageNumber)"
		>
			<i class="fas fa-check"></i>
		</button>
	</div>
</template>

<script>
export default {
	name: 'Pages',
	props: {
		numberOfPages: Number,
		currentPage: Number,
		showPagesOffset: Number
	},
	emits: ['select-page'],
	data() {
		return {
			inputPageNumber: ""
		}
	},
	methods: {
		gotoPage(pageNum) {
			this.$emit('select-page', pageNum)
		},
		enterInputPage(pageNum) {
			var inputElem = document.getElementById('enterPageInput')

			if(this.isInFullPagesSpan(pageNum)) {
				this.inputPageNumber = ""
				inputElem.blur()
				this.gotoPage(pageNum)
			} else {
				inputElem.focus()
			}
		},
		isInPagesSpan(number) {
			return number > 1 && number < this.numberOfPages
		},
		isInFullPagesSpan(number) {
			return number >= 1 && number <= this.numberOfPages
		}
	},
	computed: {
		numberOptions() {
			let array = []

			for (let i = this.showPagesOffset-1; i > 0; i--) {
				array.push(this.currentPage-i)
			}

			for (let i = 0; i < this.showPagesOffset; i++) {
				array.push(this.currentPage+i)
			}

			return array
		},
		notCloseToFirstPage() {
			return (this.currentPage-this.showPagesOffset) > 1
		},
		notCloseToLastPage() {
			return (this.currentPage+this.showPagesOffset) < this.numberOfPages
		}
	}
}
</script>

<style scoped>
.container {
	display: flex;
	flex-wrap: wrap;

	align-items: center;
	color: var(--clr-silver);
	font-weight: 600;
}

.number {
	width: 3em;
	border-radius: 50%;
	text-align: center;
}

.number:hover {
	cursor: pointer;
	color: var(--clr-gray);
	background: var(--clr-silver);
}

.current-page {
	color: var(--clr-purple);
}

.dots {
	letter-spacing: 0.25em;
}

.container > * {
	height: 3em;
	padding: 0.75em;
}

label:hover {
	cursor: pointer;
}

input {
	max-width: 4em;
	color: var(--clr-light__gray);
	border: transparent;
	border-radius: 999px;
	font-weight: 600;
	font-size: 1rem;
}

input:hover {
	background: var(--clr-silver);
	color: var(--clr-gray);
}

input:focus {
	outline: none;
}

button {
	border: none;
	border-radius: 999px;
	width: 3em;
	background: transparent;
	color: var(--clr-purple);
	animation: popOut 0.3s ease-in;
	outline: none;
}

button:hover {
	cursor: pointer;
	background: var(--clr-silver);
}

button:active {
	background: var(--clr-light__gray);
	color: var(--clr-dark__white);
}
</style>
