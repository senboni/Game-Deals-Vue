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
body {
  --clr-black: #272727;
  --clr-gray: #575757;
  --clr-light__gray: #909090;
  --clr-dark__white: #dddddd;
  --clr-white: #f1f1f1;
  --clr-purple: #8500ff;

  margin: 0;
  background: var(--clr-white);
}

main {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
