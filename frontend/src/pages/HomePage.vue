<!--=========================TEMPLATE=========================-->
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a class="is-active">Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a>Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
      <div class="column is-9">

        <section class="hero is-info welcome is-small">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                coś tam coś tam
              </h1>
              <h2 class="subtitle">
                jakiś tekst
              </h2>
            </div>
          </div>
        </section>
        kjgnvdh
        dhdshdf
        hddsfhdf
      </div>
    </div>
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
  .columns {
    width: 100%;
    height: 100%;
  }

  .card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    margin-bottom: 2rem;
  }

  .card-header-title {
    color: #8F99A3;
    font-weight: 400;
  }

  .info-tiles {
    margin: 1rem 0;
  }

  .info-tiles .subtitle {
    font-weight: 300;
    color: #8F99A3;
  }

  .hero.welcome.is-info {
    background: #36D1DC;
    background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
    background: linear-gradient(to right, #5B86E5, #36D1DC);
  }

  .hero.welcome .title, .hero.welcome .subtitle {
    color: hsl(192, 17%, 99%);
  }

  .card .content {
    font-size: 14px;
  }

  .card-footer-item {
    font-size: 14px;
    font-weight: 700;
    color: #8F99A3;
  }

  .card-footer-item:hover {
  }

  .card-table .table {
    margin-bottom: 0;
  }

  .events-card .card-table {
    max-height: 250px;
    overflow-y: scroll;
  }

  .menu-label {
    color: #8F99A3;
    letter-spacing: 1.3;
    font-weight: 700;
  }

  .menu-list a {
    color: #0F1D38;
    font-size: 14px;
    font-weight: 700;
  }

  .menu-list a:hover {
    background-color: transparent;
    color: #276cda;
  }

  .menu-list a.is-active {
    background-color: transparent;
    color: #276cda;
    font-weight: 700;
  }
</style>
<!--=========================STYLE END=========================-->
