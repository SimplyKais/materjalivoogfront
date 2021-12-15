<template>
  <v-app class="grey lighten-4">
    <Navbar/>
    <PopupDialogue/>
    <PopupDialogue2/>
    <PopupDialogue3/>
    <PopupDialogue4/>
    <PopupDialogue5/>

   <v-main>
     <router-view></router-view>
   </v-main>

  </v-app>
</template>

<script>
import Navbar from "./components/layout/Navbar";
import PopupDialogue from "./pages/PopupDialogue1";
import PopupDialogue2 from "./pages/PopupDialogue2";
import PopupDialogue3 from "./pages/PopupDialogue3";
import PopupDialogue4 from "./pages/PopupDialogue4";
import PopupDialogue5 from "./pages/PopupDialogue5";

export default {
  name: 'App',
  components: {PopupDialogue, PopupDialogue2, PopupDialogue3, PopupDialogue4, PopupDialogue5, Navbar},

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