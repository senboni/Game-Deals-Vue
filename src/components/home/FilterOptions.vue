<template>
    <div class="title">{{title}}</div>
    <div class="custom__select">
        <select v-model="selected" @change="optionSelected(selected)">
            <option v-for="option in options" :key="option">
                {{option}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'FilterOptions',
    props: {
        title: String,
        options: Array
    },
    data() {
      return {
        selected: String
      }
    },
    mounted() {
        this.optionSelected(this.defaultSelect)
    },
    methods: {
        optionSelected(option) {
            this.$emit('select-option', option)
        }
    },
    computed: {
        defaultSelect() {
            return this.options[0].toString()
        }
    },
    emits: ['select-option'],
}
</script>

<style scoped>
.title {
    display: inline-block;
    font-weight: 500;
    margin-right: 0.15em;
    color: var(--clr-light__gray);
}

select {
    background: transparent;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
}

select:focus {
    outline: 0;
}

option {
    background: var(--clr-dark__white);
}

.custom__select {
    display: inline-block;
    padding: 0.25em 0.5em;
    border-radius: 10px;
    background: var(--clr-dark__white);
}

.custom__select:last-child {
    margin-right: 0;
}

.custom__select:hover, select:hover {
    cursor: pointer;
}
</style>
