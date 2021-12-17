<template>
<div class="Navbar listContainerNavbar">


<v-row>

  <nav>
    <v-app-bar flat app color="#1D2A3E" min-height="80px">
      <img class="mr-3" :src="require('../../assets/materjalivoogLogo.png')" style="margin-top: 8px" height="80px"/>
      <v-app-bar-title class ="text-uppercase white--text" style="margin-top: 8px">
        <a href="http://localhost:8081/" class ="font-weight-medium text-uppercase white--text text-decoration-none" style="margin-right: 15px">Kuidas see toimib?</a>
        <a href="http://localhost:8081/" class ="font-weight-medium text-uppercase white--text text-decoration-none" style="margin-right: 15px">Meist</a>
        <a href="http://localhost:8081/" class ="font-weight-medium text-uppercase white--text text-decoration-none">Pood - materjalid</a>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn href="http://localhost:8081/" class="white--text" outlined style="margin-right: 10px; margin-top: 10px">
        <span>Registreeri</span>
      </v-btn>
      <v-btn href="http://localhost:8081/" class="teal darken-1 white--text" style="margin-top: 10px">
        <span>Logi sisse</span>
      </v-btn>

      <a href="http://localhost:8081/" style="color: transparent; margin-left: 10px; margin-top: 10px;">
        <v-icon color="white" >mdi-purse</v-icon>
      </a>
    </v-app-bar>
  </nav>
</v-row>
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
.automargin {
  margin: auto;
}
.listContainerNavbar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>