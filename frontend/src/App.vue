<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>

  import Navbar from './components/Navbar.vue';

  export default {
    name: 'App',
    components: {Navbar}
  }
</script>

<style>
  html, body {
    font-family: 'Open Sans', serif;
    font-size: 16px;
    line-height: 1.5;
    height: 100%;
    background: #ECF0F3;
  }

  .hero.is-success {
    background: #F2F6FA;
  }

  .hero, .hero.is-success {
    -webkit-box-shadow: none;
    box-shadow: none;
  }


  label {
    color: rgb(122, 122, 122);
  }

  input {
    font-weight: 300;
  }

  p {
    text-align: justify;
  }

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 500;
  }

  img {
    display: block;
    margin: auto;
  }
</style>
