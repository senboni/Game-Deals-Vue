<template>
	<div id="custom-select" :class="[expanded ? 'noselect shadow' : 'noselect']">
		<!-- <div class="title">{{title}}</div> -->
		<div class="container" @click="toggleExpand">
				<div class="selected">{{title}}: {{selected}}</div>
				<i :class="[expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i>
			</div>
		<template v-if="expanded">
			<div class="options">
				<div v-for="option in optionsExceptSelected" :key="option" @click="selectOption(option)" class="option">
					{{option}}
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'Select',
	props: {
		title: String,
		options: Array
	},
	emits: ['select-option'],
	data() {
		return {
			selected: "",
			expanded: false
		}
	},
	mounted() {
		this.selectDefault()
		this.optionSelected(this.defaultOption)
	},
	methods: {
		optionSelected(option) {
			this.$emit('select-option', option)
		},
		selectDefault() {
			this.selected = this.defaultOption.toString()
		},
		selectOption(option) {
			this.toggleExpand()
			this.selected = option
			this.optionSelected(this.selected)
		},
		toggleExpand() {
			this.expanded = !this.expanded
		}
	},
	computed: {
		defaultOption() {
			return this.options[0]
		},
		optionsExceptSelected() {
			return this.options.filter(x => x != this.selected)
		}
	}
}
</script>

<style scoped>
#custom-select {
	font-weight: 600;
	position: relative;
}

.title {
	display: inline-block;
	color: var(--clr-light__gray);
}

.container:hover, .option:hover {
	cursor: pointer;
	background: var(--clr-gray);
	color: var(--clr-dark__white);
}

.container {
	display: flex;
	justify-content: space-between;
	padding: 0.25em 0.75em;
	background: var(--clr-dark__white);
	color: var(--clr-gray);
	border-radius: var(--border-radius);
}

.selected {
	margin: -2px 5px 0 0;
}

.container, .options {
	min-width: 9em;
}

.options {
	position: absolute;
	margin-top: 0.25em;
	background: var(--clr-dark__white);
	border-radius: var(--border-radius);
}

.option {
	color: var(--clr-light__gray);
	padding: 0.125em 0.75em;
}

.option:first-child {
	border-top-left-radius: var(--border-radius);
	border-top-right-radius: var(--border-radius);
	padding-top: 0.25em;
}

.option:last-child {
	border-bottom-left-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	padding-bottom: 0.25em;
}

.shadow > * {
	box-shadow: var(--box-shadow);
}
</style>
