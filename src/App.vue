<template lang="pug" src="./app.pug" />

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --sample-weight: 900;
  font-size: 10px;
}
html,body {
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  background-color: #222;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c7ea0;
}
  .sample {
    font-weight: var(--sample-weight);
    font-size: 2rem;
    overflow: hidden;
    padding: 10px;
    text-align: left;
  }
    img {
      width: 30px;
      float: left;
      margin-right: 10px;
    }

</style>