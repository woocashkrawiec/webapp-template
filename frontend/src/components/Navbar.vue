<!--=========================TEMPLATE=========================-->
<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="#/">
          jakiś tekst
        </a>
        <div class="navbar-burger burger" @click="toggleBurger" :class="{'is-active': burgerActive}"
             data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu" :class="{'is-active': burgerActive}">
        <div class="navbar-start">
          <a class="navbar-item" href="#/">
            zakładka1
          </a>
          <a class="navbar-item" href="#/strona2">
            zakładka2
          </a>
          <a class="navbar-item" href="#/strona3">
            zakładka3
          </a>
        </div>

      </div>
    </div>
  </nav>
</template>
<!--=======================TEMPLATE END=======================-->

<!--==========================SCRIPT==========================-->
<script>

  export default {
    name: "navbar",
    data() {
      return {
        burgerActive: false
      }
    },
    methods: {
      toggleBurger() {
        this.burgerActive = !this.burgerActive;
      }
    }
  }
</script>
<!--=========================SCRIPT END========================-->

<!--===========================STYLE===========================-->
<style scoped>

  nav.navbar {
    border-top: 4px solid #276cda;
    margin-bottom: 1rem;
  }

  .navbar-item.brand-text {
    font-weight: 300;
    color: #8F99A3;
  }

  .navbar-item, .navbar-link {
    font-size: 14px;
    font-weight: 700;
    padding: 10px;
  }

</style>
<!--=========================STYLE END=========================-->
