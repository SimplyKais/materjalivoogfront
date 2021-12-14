
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
            Lisa kuulutus
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
              dark
              color="#1D2A3E"
          >
            <v-btn href="http://localhost:8080/" flat
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
            <v-list class="IndrekOnLoll"
                subheader
            >
              <v-list-item style="margin-top: 50px">
                <v-list-item-content>
                  <v-list-item-title>Mis materjaliga on tegu? {{ loading }} </v-list-item-title>
                    <v-autocomplete
                        v-model="value"
                        :items="['Kangas', 'Nahk', 'Papp/paber']"
                        dense
                    />
                </v-list-item-content>
              </v-list-item>
              <v-list-item style="margin-top: 50px">
                <v-list-item-content>
                  <v-list-item-title>Mis kujul see olemas on?</v-list-item-title>
                    <v-autocomplete
                        v-model="value"
                        :items="items"
                        dense
                    />
                </v-list-item-content>
              </v-list-item>
              <v-list-item style="margin-top: 50px">
                <v-list-item-content>
                  <v-list-item-title>Materjalisaadavus</v-list-item-title>
                      <v-autocomplete
                          v-model="value"
                          :items="['Lõplik kogus', 'Tekib jooksvalt juurde']"
                          dense
                      />
                    </v-list-item-content>
              </v-list-item>
            </v-list>

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
  name: "PopupDialogue",
  data () {
    return {
      loading: false,
      dialog: '',
      value: '',
      items: [],
      image: '',
      categories: [],
    }
  },
  methods: {
    getCategories () {
      //gfdgfdgdfghdf javascript
    },
  },
  beforeMount() {
    const categories = this.getCategories();
    console.log('HERE')
    this.categories = categories;
  },
  created() {
    console.log('CREATED')
  }
}
</script>

<style scoped>

.IndrekOnLoll {
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