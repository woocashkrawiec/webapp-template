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
    <br>
    <h1>IOT DLA MEDYCYNY</h1>
    <br>
    <h2>Technologie w aspekcie zdrowia</h2>
    <br>
    <p>Spośród wszystkich dziedzin, które obiecuje zrewolucjonizować Internet rzeczy, medycyna wysuwa się na pierwszy
      plan. Wejście inteligentnych technologii łączności do medycyny zmienia scenariusz w przypadku choroby, którego
      stajemy się częścią - i zmienia go na lepsze. </p><br>
    <img align="center" width="30%" height="30%" src="../assets/iot1.png"/><br>
    <p>Największa zmiana zachodzi, gdy istniejące sprzęty medyczne zostają ze sobą połączone. Mowa tu o wszelkiego
      rodzaju sprzętach znajdujących się w salach szpitalnych, na oddziale intensywnej opieki medycznej, w izbie przyjęć
      czy na sali operacyjnej. A także o wszystkich urządzeniach medycznych, które można mieć przy sobie - zarówno tych
      zewnętrznych jak i wszczepionych - monitorujących ciśnienie krwi, pracę serca a nawet o rozrusznikach. Wszystkie
      te urządzenia mogą być podłączone bezprzewodowo do Internetu rzeczy, a także ze sobą nawzajem lub do centralnej
      bazy danych czy systemu monitorującego. Urządzenia te, zamiast generować osobne raporty, przesyłają dane w czasie
      rzeczywistym do zautomatyzowanego lub kontrolowanego przez lekarza systemu który może natychmiast zinterpretować
      te niezależne odczyty, a nawet podjąć na podstawie tej analizy stosowne działania. </p>
  </div>
  <br>
  <p>Jednym z pierwszych i najważniejszych kroków w kierunku inteligentnej opieki medycznej jest wykorzystywanie
    zdalnych urządzeń monitorujących.
    Dzięki tym urządzeniom pacjenci bądą w warunkach domowych monitorowani w takim samym zakresie w jakim było to
    poprzednio możliwe tylko w szpitalu i innych placówkach medycznych. Mówimy o monitorowaniu zdalnym, które nie będzie
    zależne od miejsca pobytu, możliwym dzięki internetowej komunikacji bezprzewodowej pozwalającej lekarzowi
    monitorować stan zdrowia, aktywność fizyczną i przyjmowanie leków pacjentów w czasie rzeczywistym oraz w nagłych
    przypadkach powiadamiać odpowiedni personel.
  </p><br>
</template>
<!--=======================TEMPLATE END=======================-->

<!--==========================SCRIPT==========================-->
<script>
  export default {
    name: "firstPage"
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
