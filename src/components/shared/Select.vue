<template>
	<div id="custom-select" class="noselect">
		<div :class="['container', expanded ? '' : 'light']" @click="toggleExpand">
			<div class="selected">{{title}}: {{selected}}</div>
			<i :class="['fas fa-chevron-down rotate', expanded ? 'rotated' : '']"></i>
		</div>
		<div :class="['options', expanded ? '' : 'collapsed']">
			<div v-for="option in optionsExceptSelected" 
				:key="option" 
				@click="selectOption(option)" 
				class="option"
			>
				{{option}}
			</div>
		</div>
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
			this.selected = this.defaultOption
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
			return this.options[0].toString()
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
	background: var(--clr-light__gray);
	color: var(--clr-dark__white);
}

.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.25em 0.75em;
	background: var(--clr-gray);
	color: var(--clr-dark__white);
	border-radius: var(--border-radius);
}

.light {
	background: var(--clr-dark__white);
	color: var(--clr-gray);
}

.light:hover {
	background: var(--clr-light__gray);
	color: var(--clr-dark__white);
}

.selected {
	margin-right: 5px;
}

.container, .options {
	min-width: 9em;
}

.options {
	position: absolute;
	margin-top: 0.25em;
	background: var(--clr-gray);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);

	max-height: 10em;
	overflow: hidden;
	transition: max-height 0.15s ease-in-out;
}

.collapsed {
	max-height: 0;
}

.option {
	color: var(--clr-dark__white);
	padding: 0.25em 0.75em;
}

.option:first-child {
	border-top-left-radius: var(--border-radius);
	border-top-right-radius: var(--border-radius);
	padding-top: 0.5em;
}

.option:last-child {
	border-bottom-left-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	padding-bottom: 0.5em;
}

.rotate {
	transition: transform 0.3s ease-in-out;
}

.rotated {
	transform: rotate(180deg) translateY(1px);
}
</style>
