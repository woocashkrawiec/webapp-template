<!--=========================TEMPLATE=========================-->
<template>
  <div class="container">
    <section class="hero is-info welcome is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Interakcje człowiek komputer
          </h1>
          <h2 class="subtitle">
          </h2>
        </div>
      </div>
    </section>
    <h1>Strona główna</h1>
  </div>
</template>
<!--=======================TEMPLATE END=======================-->

<!--==========================SCRIPT==========================-->
<script>
  export default {
    name: "homePage"
  }
</script>
<!--=========================SCRIPT END========================-->

<!--===========================STYLE===========================-->
<style scoped>

  .hero.welcome.is-info {
    background: #36D1DC;
    background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
    background: linear-gradient(to right, #5B86E5, #36D1DC);
  }

  .hero.welcome .title, .hero.welcome .subtitle {
    color: hsl(192, 17%, 99%);
  }
</style>
<!--=========================STYLE END=========================-->
