<template>
  <Header />
  <main>
    <router-view/>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
	--clr-black: #242527;
	--clr-gray: #4a4e53;
	--clr-light__gray: #84888f;
	--clr-silver: #babec5;
	--clr-dark__white: #dce0e4;
	--clr-white: #ecf0f5;
	--clr-purple: #7a00ff;

	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	font-family: 'Lato', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--clr-gray);
}

body {
	background: var(--clr-white);
}

main {
	padding: 0 1rem;
}

@media (min-width: 960px) {
	main {
		max-width: 960px;
		margin: 0 auto;
	}
}

a {
	text-decoration: none;
	color: inherit;
}

.purple-text {
	color: var(--clr-purple)
}

.gray-text {
	color: var(--clr-gray)
}

@-webkit-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 100;
	}
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 100;
	}
}
</style>
