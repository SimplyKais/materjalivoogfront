
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
            4. leht (hinnakava)
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

            <img :scr="image"/>


              <v-btn elevation="2" x-large class="blue-grey darken-4 white--text automargin">
                <v-icon>mdi-chevron-left</v-icon>
                <span>Tagasi</span>
              </v-btn>
              <v-btn  elevation="2" x-large class="teal darken-1 white--text automargin">Salvesta ja edasi
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>

        </v-card>
      </v-dialog>
    </v-row>
  </template>


<script>
export default {
  name: "PopupDialogue4",
  data () {
    return {
      loading: false,
      dialog: '',
      value: '',
      value2: '',
      items: [],
      image: '',
      categories: [],
      subcategories: [],
      rules: {
        required: value => !!value || 'Kohustuslik',
      },
    }
  },
  methods: {
    getCategories () {
      console.log("REQUESTING")
      this.$http.get('api/listing/categories')
          .then (result => {
            console.log('RES', result)
            this.categories = result.data
          })
      .catch(e => console.log('ERROR', e))
    },
  },
  beforeMount() {
    this.getCategories();
  },
  created() {
    console.log('CREATED')
  },

  getSubcategories () {
    console.log("REQUESTING")
    this.$http.get('api/listing/subcategories')
        .then (result => {
          console.log('RES', result)
          this.subcategories = result.data
        })
        .catch(e => console.log('ERROR', e))
  },

  beforeMount2() {
    this.getSubcategories();
  },
  created2() {
    console.log('CREATED')
  },

}
</script>

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