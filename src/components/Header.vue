<template>
	<header>
		<div class="title">
			<i>
				<span>GAME</span>
				<span>DEALS</span>
			</i>
		</div>

		<i @click="toggleNav" id="hamburger" :class="[navMenu ? 'hide' : '', 'fas fa-bars']"></i>

		<div :style="[navMenu ? 'transform: translateX(0)' : '']" @click="toggleNav" id="closeNav"></div>
		<nav :style="[navMenu ? 'transform: translateX(0)' : '']">
			<i class="fas fa-arrow-right nav-x"></i>
			<router-link @click="toggleNav" to="/">Home</router-link>
			<router-link @click="toggleNav" to="/about">About</router-link>
			<router-link @click="toggleNav" to="/help">Help</router-link>
			<router-link @click="toggleNav" to="/contact">Contact</router-link>
		</nav>
		
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			navMenu: false
		}
	},
	methods: {
		toggleNav() {
			this.navMenu = !this.navMenu
		}
	}
}
</script>

<style scoped>
.show {
	display: initial;
}

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

.title {
	font-size: 2rem;
}

.title span:first-child {
	color: var(--clr-purple);
	background: var(--clr-dark__white);
	padding: 0 0.25rem 0 0.5rem;
}

.title span:last-child {
	color: var(--clr-dark__white);
	background: var(--clr-gray);
	padding: 0 0.5rem 0 0.25rem;
}

#hamburger {
	font-size: 2rem;
	animation: fadeIn 0.5s ease-in-out;
}

#closeNav {
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
	background: rgba(0, 0, 0, 0.7);
	padding: 2rem;
}

nav .nav-x {
	color: var(--clr-dark__white);
	font-size: 1.5rem;
	position: absolute;
	left: -2rem;
	top: 49vh;
	pointer-events: none;
}

nav a {
	color: var(--clr-dark__white);
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0.5rem 1rem 0.5rem 5rem;
	border-radius: var(--border-radius);
}

nav a.router-link-exact-active {
	color: var(--clr-purple);
}

@media (min-width: 760px) {
	#hamburger {
		display: none;
	}

	nav {
		position: initial;
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		overflow: hidden;
		font-size: 1.5rem;
		background: transparent;
		animation: none;
		transform: translateX(0);
		padding: 0;
	}

	nav .nav-x {
		display: none;
	}

	#closeNav {
		display: none;
	}

	nav a {
		color: var(--clr-light__gray);
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 1.25rem;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: var(--border-radius);
	}

	nav a:hover {
		color: var(--clr-gray);
		background: var(--clr-dark__white);
	}

	nav a.router-link-exact-active {
		color: var(--clr-purple);
	}
}
</style>
