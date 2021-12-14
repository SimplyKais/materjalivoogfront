<template>
<div class="Navbar listContainerNavbar">

  <nav>
    <v-app-bar flat app color="#263238">
      <v-app-bar-title class ="text-uppercase white--text">
        <a href="http://localhost:8080/" class ="font-weight-medium text-uppercase white--text text-decoration-none">Kuidas see toimib?</a>
        <a href="http://localhost:8080/" class ="font-weight-medium text-uppercase white--text text-decoration-none">Meist</a>
        <a href="http://localhost:8080/" class ="font-weight-medium text-uppercase white--text text-decoration-none">Pood - materjalid</a>
      </v-app-bar-title>
      <v-spacer />
      <v-btn href="http://localhost:8080/" text color ="#263238">
        <span>Registreeri</span>
      </v-btn>
      <v-btn href="http://localhost:8080/" text color ="#263238 dark">
        <span>Kasutaja</span>
      </v-btn>

      <a href="http://localhost:8080/" style="color: transparent">
        <v-icon color="white">mdi-purse</v-icon>
      </a>
    </v-app-bar>
  </nav>
</div>
</template>

<script>
  export default {
    name: "Navbar.vue",
    beforeMount() {
      console.log('SIIN HOOPIS')
    }
  }

</script>

<style scoped>
.listContainerNavbar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>