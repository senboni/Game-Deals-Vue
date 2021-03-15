<template>
	<header>
		<div class="logo">
			<i>
				<span>GAME</span>
				<span>DEALS</span>
			</i>
		</div>

		<i @click="toggleNav" id="hamburger" :class="[navMenu ? 'hide' : '', 'fas fa-bars']"></i>

		<div :style="[navMenu ? 'transform: translateX(0)' : '']" @click="toggleNav" id="closeNavArea"></div>
		<nav :style="[navMenu ? 'transform: translateX(0)' : '']">
			<i class="fas fa-arrow-right nav-x"></i>
			<router-link @click="toggleNav" to="/">Home</router-link>
			<router-link @click="toggleNav" to="/games">Games</router-link>
			<router-link @click="toggleNav" to="/about">About</router-link>
			<label @click="toggleTheme" class="noselect">
				{{theme === 'light' ? 'Dark' : 'Light'}} Theme
				<i id="themeCheckbox" :class="[theme === 'light' ? 'fa-moon' : 'fa-sun', 'fas']"></i>
			</label>
		</nav>
		
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: {
		theme: String
	},
	emits: ['toggle-theme'],
	data() {
		return {
			navMenu: false
		}
	},
	methods: {
		toggleNav() {
			this.navMenu = !this.navMenu
		},
		toggleTheme() {
			this.$emit('toggle-theme')
		}
	}
}
</script>

<style scoped>
.hide {
	display: none;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 1.5rem;
	font-weight: 800;
	padding: 1rem 1rem 0 1rem;
}

@media (min-width: 960px) {
	header {
		max-width: 960px;
		margin: 0 auto;
	}
}

.logo {
	font-size: 2rem;
}

.logo span:first-child {
	color: var(--clr-purple);
	padding: 0 0.25rem 0 0.5rem;
}

.logo span:last-child {
	color: var(--clr-dark__white);
	background: var(--clr-gray);
	padding: 0 0.5rem 0 0.25rem;
}

#hamburger {
	font-size: 2rem;
	animation: fadeIn 0.5s ease-in-out;
	border: 2px solid transparent;
}

#hamburger:hover {
	cursor: pointer;
}

#closeNavArea {
	z-index: 9;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	transform: translateX(100%);
	transition: transform 0.25s ease-in-out;
	width: 100vw;
	background: rgba(0, 0, 0, 0.7);
}

nav {
	z-index: 10;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	transform: translateX(114%);
	transition: transform 0.25s ease-in-out;
	display: flex;
	flex-direction: column;
	white-space: nowrap;
	text-align: end;
	font-size: 1.5rem;
	padding: 2rem;
	background: rgba(0, 0, 0, 0.7);
}

.nav-x {
	font-size: 1.5rem;
	position: absolute;
	left: -2rem;
	top: 49vh;
	pointer-events: none;
}

:root[data-theme=dark] .nav-x {
	color: var(--clr-purple);
}

:root[data-theme=light] .nav-x {
	color: var(--clr-dark__white);
}

nav a, nav label {
	color: var(--clr-dark__white);
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0.5rem 1rem 0.5rem 5rem;
	border-radius: var(--border-radius);
}

nav a:hover, nav label:hover {
	color: var(--clr-purple);
	background: rgba(0, 0, 0, 0.2);
	cursor: pointer;
}

nav a.router-link-exact-active {
	color: var(--clr-purple);
}

nav input[type=checkbox] {
	font-size: 1rem;
}

@media (min-width: 760px) {
	#hamburger {
		display: none;
	}

	nav {
		overflow: hidden;
		position: initial;
		flex-direction: row;
		font-size: 1.5rem;
		background: transparent;
		transform: translateX(0);
		padding: 0;
	}

	nav .nav-x {
		display: none;
	}

	#closeNavArea {
		display: none;
	}

	nav a, nav label {
		color: var(--clr-light__gray);
		font-size: 1.25rem;
		font-weight: 600;
		padding: 0.5rem 1rem;
	}

	nav a:hover, nav label:hover {
		color: var(--clr-gray);
		background: var(--clr-dark__white);
	}
}
</style>
