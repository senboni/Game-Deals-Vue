<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body {
  --clr-black: #272727;
  --clr-gray: #575757;

  margin: 0 1em;
}

a {
  text-decoration: none;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
