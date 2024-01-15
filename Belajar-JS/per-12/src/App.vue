<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>Halo dunia</h1>
  <ContohSederhana /> -->
  <!-- ini buat manggil component ke html -->
  <body>
    <NavBar/>
    <KontenApp/>
    <img src="@/assets/robot.png" alt="robot">
  </body>
</template>

<!-- <script>
document.title = "dede zakaria"
//  di vue kita bisa pake css sama js bareng di 1 file
import ContohSederhana from "@/components/ContohSederhana.vue";
// ini dipake buat import component

export default {
  name: 'App',
  components: {
    ContohSederhana: ContohSederhana
  }
  // ini buat manggil component ke javascript
}
</script> -->

<!-- <style>
h1 {
  color : red;
}
</style> -->

<script>
  document.title = "StudiCase"
  import NavBar from "@/components/NavBar.vue";
  import KontenApp from "@/components/KontenApp.vue";

  export default{
    name: 'App',
    components: {
      NavBar: NavBar,
      KontenApp: KontenApp
    }
  }
</script>
<style>
*{
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
  body{
    background-color: #393E46;
    position: relative;
  }
  img{
    position: absolute;
    right: 180px;
    bottom: -90px;
    height: 423px;
    width: 301px;
}
</style>