<template>


  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="ma-auto"
            color="teal darken-1 "
            dark
            v-bind="attrs"
            v-on="on"
        >
          Lisa pilt
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
            dark
            color="#1D2A3E"
        >
          <v-btn href="http://localhost:8081/" text
                 icon
                 dark
                 @click="console.log('clicked')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
                dark
                text
                @click="console.log('clicked')"></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="listContainer">
          <v-list class="miskit"
                  subheader
          >
            <v-file-input style="margin-top: 100px"
                          label="Lisa pildid"
                          counter
                          multiple
                          show-size
                          truncate-length="15"
                          prepend-icon="mdi-camera"
                          @change="onFileSelected"
                          v-model="pilt"
            ></v-file-input>
            <v-btn elevation="2" class="teal darken-1 white--text automargin" @click="onUpload">lae üles
              <v-icon>mdi-upload</v-icon>
            </v-btn>

            <img id="Preview_image_create" class="Preview_image"/>


          </v-list>
          <p class="text-justify">
            Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce
            convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed,
            nonummy id, metus.

            Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis
            vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
          </p>
          <v-btn elevation="2" x-large class="blue-grey darken-4 white--text automargin">
            <v-icon>mdi-chevron-left</v-icon>
            <span>Tagasi</span>
          </v-btn>
          <v-btn elevation="2" x-large class="teal darken-1 white--text automargin">Salvesta ja edasi
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  name: "PopupDialogue2",
  data() {
    return {
      loading: false,
      dialog: '',
      fileArray: [],
      selectedFile: null,
      pilt: [],
      e: [],
      // rules: {
      //   required: value => !!value || 'Required.',
      // },
    }
  },
  methods: {
    onFileSelected() {
      console.log(this.pilt)
      this.selectedFile = this.pilt[0]
    },
    onUpload() {
    },
    Preview_image(e) {
      console.log(e);
      if (e.target.files && e.target.files[0]) {
        console.log("test")
      }
    }
  }
}
</script>

// methods: {
//   getCategories () {
//     console.log("REQUESTING")
//     this.$http.get('api/listing/categories')
//         .then (result => {
//           console.log('RES', result)
//           this.categories = result.data
//         })
//     .catch(e => console.log('ERROR', e))
//   },
//
// },
// beforeMount() {
//   this.getCategories();
// },
// created() {
//   console.log('CREATED')
// }


<style scoped>

.miskit {
  padding: 0 50px 100px 50px;
}

.automargin {
  margin: auto;
}


.listContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 2fr;
  height: calc(100vh - 64px);
}
</style>