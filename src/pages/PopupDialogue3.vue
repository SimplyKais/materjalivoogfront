
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
            <v-list class="miskit3"
                subheader
            >
              <v-list-item style="margin-top: 50px">
                <v-text-field style="margin-top: 50px"
                      v-model="value"
                      :rules="[rules.required]"
                      label="Pealkiri"
                      counter
                      maxlength="30"
                />
              </v-list-item>

              <v-list-item style="margin-top: 10px">
                <v-text-field
                              v-model="value2"
                              :rules="[rules.required]"
                              label="Kuulutuse tekst"
                              counter
                              maxlength="250"
                />
              </v-list-item>

              <v-combobox style="padding: 8px 0px"
                          multiple
                          v-model="select"
                          label="Märksõnad"
                          append-icon
                          chips
                          deletable-chips
                          class="tag-input"
                          :search-input.sync="search"
                          @keyup.tab="updateTags"
                          @paste="updateTags">
              </v-combobox>
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
  name: "PopupDialogue3",
  data () {
    return {
      loading: false,
      dialog: '',
      value: '',
      value2: '',
      value3: '',
      items: [],
      image: '',
      categories: [],
      rules: {
        required: value => !!value || 'Required.',
      },
      title: '',
      text: '',
    }
  },
  methods: {
    getTags () {
      this.$http.get('api/listing/tags')
          .then (result => this.tags = result.data)
    },
  },
  // beforeMount() {
  //   const categories = this.getCategories();
  //   console.log('HERE')
  //   this.categories = categories;
  // },
  created() {
    console.log('CREATED')
  }
}
</script>

<style scoped>

.miskit3 {
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