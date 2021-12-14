<template>
  <v-app class="grey lighten-4">
    <Navbar/>
    <PopupDialogue/>
    <PopupDialogue3/>

   <v-main>
     <router-view></router-view>
   </v-main>

  </v-app>
</template>

<script>
import Navbar from "./components/layout/Navbar";
import PopupDialogue from "./pages/PopupDialogue1";
import PopupDialogue3 from "./pages/PopupDialogue3";

export default {
  name: 'App',
  components: {PopupDialogue, PopupDialogue3, Navbar},

  data () {
    return {
    }
  }
}
</script>
<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>