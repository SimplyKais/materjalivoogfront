
  <template>


    <v-row>
      >
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


            <v-btn v-on:click="warning" text
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

          <v-alert
              border="top"
              color="orange darken-1"
              dark
              v-if="isAlert"
          >
            Andmed salvestamata! Oled kindel, et soovid lahkuda lehelt?
            <br>
            <br>
            <v-btn elevation="2" large class="blue-grey darken-4 white--text automargin" href="http://localhost:8081/">
              <v-icon>mdi-chevron-left</v-icon>
              <span>Lahku lehelt</span>
            </v-btn>

            <v-btn  elevation="2" large class="grey lighten-2 black--text automargin" v-on:click="warningOff">Jätka lehel
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>

          </v-alert>


          <div class="listContainer">

            <v-list v-if="!firstDialogCompleted" class="miskit"
                    subheader
            >
              <div>
                <v-list-item style="margin-top: 50px">
                  <v-list-item-content>
                    <v-list-item-title>* Mis materjaliga on tegu? </v-list-item-title>
                    <v-autocomplete
                        v-model="valueOfCategory"
                        :rules="[rules.required]"
                        :items="categories"
                        dense
                        @change="getSubcategories"
                    />
                  </v-list-item-content>
                </v-list-item>
                <v-list-item style="margin-top: 50px">
                  <v-list-item-content>
                    <v-list-item-title>Mis kujul see olemas on? </v-list-item-title>
                    <v-autocomplete
                        v-model="valueOfSubcategory"
                        :items="subcategories"
                        dense
                    />
                  </v-list-item-content>
                </v-list-item>
                <v-list-item style="margin-top: 50px">
                  <v-list-item-content>
                    <v-list-item-title>* Materjalisaadavus</v-list-item-title>
                    <v-autocomplete
                        v-model="valueOfDeadstock"
                        :rules="[rules.required]"
                        :items="['Lõplik kogus', 'Tekib jooksvalt juurde']"
                        dense
                    />
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-list>




            <v-list v-if="firstDialogCompleted && !secondDialogCompleted" class="miskit"
                    subheader>
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

            <v-list v-if="firstDialogCompleted && secondDialogCompleted && !thirdDialogCompleted" class="miskit"
                    subheader
            >
              <v-list-item style="margin-top: 50px">
                <v-text-field style="margin-top: 50px"
                              v-model="valueOfTitle"
                              :rules="[rules.required]"
                              label="Pealkiri"
                              counter
                              maxlength="30"
                />
              </v-list-item>

              <v-list-item style="margin-top: 10px">
                <v-text-field
                    v-model="valueOfDescription1"
                    :rules="[rules.required]"
                    label="Kuulutuse tekst"
                    counter
                    maxlength="250"
                />
              </v-list-item>

              <v-combobox style="padding: 8px 0px"
                          multiple
                          v-model="selectTags"
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


            <v-list v-if="firstDialogCompleted && secondDialogCompleted && thirdDialogCompleted && !forthDialogCompleted" class="miskit"
                    subheader
            >
              <v-form>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="5"
                    >
                      <v-text-field
                          v-model="price"
                          :rules="[rules.required]"
                          label="Hind"
                      ></v-text-field>
                    </v-col>€

                    <v-col
                        cols="120"
                        sm="6"
                        md="5"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>* Ühik</v-list-item-title>
                          <v-autocomplete
                              v-model="unit"
                              :rules="[rules.required]"
                              :items="['/m', '/kg']"
                              dense
                          />
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>

                    Miinimumhind 5€ <br>
                    Hinnale lisandub KM Platvormi teenustasu -10%

                    <v-list-item style="margin-top: 50px">
                      <v-text-field style="margin-top: 50px"
                                    v-model="valueOfDescription2"
                                    label="Lisainfo"
                                    counter
                                    maxlength="200"
                      ></v-text-field>
                    </v-list-item>
                    <v-col
                        cols="12"
                        sm="6"
                        md="5"
                    >
                      <v-text-field
                          v-model="discountPrice"
                          label="Soodushind"
                      ></v-text-field>
                    </v-col>€

                    <v-col
                        cols="12"
                        sm="6"
                        md="5">
                      <v-text-field
                          v-model="discountPercentage"
                          label="Allahindlus %"
                      ></v-text-field>
                    </v-col>%

                    <v-col
                        cols="12"
                        sm="6"
                        md="5">
                      <v-text-field
                          v-model="inventory"
                          label="Laojääk"
                      ></v-text-field>
                    </v-col>


                    <v-col
                        cols="12"
                        sm="6"
                        md="5"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Laoseis</v-list-item-title>
                          <v-autocomplete
                              v-model="valueOfInStock"
                              :rules="[rules.required]"
                              :items="['laos','järeltellimisel']"
                              dense
                          />
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-list>

            <v-list v-if="firstDialogCompleted && secondDialogCompleted && thirdDialogCompleted && forthDialogCompleted && !fifthDialogCompleted" class="miskit"
                    subheader
            >
              <v-list-item style="margin-top: 50px">
                <v-list-item-content>
                  <v-list-item-title>* Asukoht </v-list-item-title>
                  <v-autocomplete
                      v-model="valueOfRegion"
                      :rules="[rules.required]"
                      :items="region"
                      dense
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item style="margin-top: 50px">
                <v-list-item-content>
                  <v-list-item-title>* Kohaletoimetamine </v-list-item-title>
                  <p>{{ selected }}</p>
                  <v-list style="margin-top: 10px">
                  <v-checkbox
                      v-model="pickupSelected"
                      label="Järeletulemisega"
                      value="Pickup"
                  ></v-checkbox>

                  <v-checkbox
                      v-model="shippingSelected"
                      label="Saatmisega"
                      value="Shipping"
                  ></v-checkbox>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
              <v-list-item style="margin-top: 50px">
                <v-text-field style="margin-top: 50px"
                              v-model="valueOfRestrictionDescription"
                              label="Lisainfo"
                              placeholder="Tarneaeg, kaubapäev, tarne reeglid jms."
                              counter
                              maxlength="200"
                ></v-text-field>
              </v-list-item>
            </v-list>


            <img :src="require('../assets/Image.jpg')" style="margin-top: -90px; margin-left: 50px" height="700px" class="column2"/>

            <v-btn elevation="2" x-large class="blue-grey darken-4 white--text automargin" v-on:click="warning">
                <v-icon>mdi-chevron-left</v-icon>
                <span>Tagasi</span>
              </v-btn>

              <v-btn :disabled="isProceedingDisabled" elevation="2" x-large class="teal darken-1 white--text automargin" v-on:click="setCompleted">Salvesta ja edasi
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
  components: {},
  data() {
    return {
      isAlert: false,
      firstDialogCompleted: false,
      secondDialogCompleted: true,
      thirdDialogCompleted: false,
      forthDialogCompleted: false,
      fifthDialogCompleted: false,
      isProceedingDisabled: true,
      selectTags: '',
      updateTags: '',
      dialog: '',
      valueOfCategory: '',
      valueOfSubcategory: '',
      valueOfDeadstock: '',
      valueOfTitle: '',
      valueOfDescription1: '',
      price: '',
      unit: '',
      valueOfDescription2: '',
      discountPrice: '',
      discountPercentage: '',
      inventory: '',
      valueOfInStock: '',
      valueOfRegion: '',
      pickupSelected: '',
      shippingSelected: '',
      valueOfRestrictionDescription: '',
      items: [],
      image: '',
      search: '',
      categories: [],
      subcategories: [],
      rules: {
        required: value => !!value || 'Kohustuslik',
      },
      selectedFile: null,
      pilt: [],
      categoriesResponse: [],
      subcategoriesResponse: [],
    }
  },
  beforeMount() {
    this.getCategories();
  },
  beforeUpdate() {
    console.log('before update', this)
    if (!this.firstDialogCompleted) {
      if (this.valueOfCategory && this.valueOfSubcategory && this.valueOfDeadstock) this.isProceedingDisabled = false;
    }
  },

  created() {
    console.log('CREATED')
  },
  methods: {
    getCategories() {
      console.log("REQUESTING")
      this.$http.get('api/listing/categories')
          .then(result => {
            console.log('RES', result)
            this.categoriesResponse = result.data;
            this.categories = result.data.map(item => item.name)
          })
          .catch(e => console.log('ERROR', e))
    },
    getSubcategories() {
      console.log("REQUESTING subcategories", this.valueOfCategory)

      const id = this.categoriesResponse.find(item => item.name === this.valueOfCategory)?.categoryId;
      console.log('subcagtegory id:', id)
      this.$http.get(`api/listing/selectsubcategories/${id}`)
          .then(result => {
            console.log('RES', result)
            this.subcategoriesResponse = result.data;
            this.subcategories = result.data.map(item => item.name)
          })
          .catch(e => console.log('ERROR', e))
    },
    warning: function () {
     // alert("Andmed salvestamata! Oled kindel, et soovid lahkuda lehelt?");
      this.isAlert = true;
    },
    warningOff: function () {
      // alert("Andmed salvestamata! Oled kindel, et soovid lahkuda lehelt?");
      this.isAlert = false;
    },

    createListing() {
      console.log('before create', this.categoriesResponse, this.subcategoriesResponse)
      const data = {
        category: this.categoriesResponse.find(item => item.name === this.valueOfCategory)?.categoryId,
        subcategory: this.subcategoriesResponse.find(item => item.name === this.valueOfSubcategory)?.subcategoryId,
        deadStock: !!this.valueOfDeadstock,
      };
      console.log("POST DATA", data)
      this.$http.post('api/listing/create/pg1', data);
    },

    updateListingPg1() {
      console.log("PUT DATApg1")
      this.$http.put('api/listing/create/pg1/' + this.valueOfCategory + '/' + this.valueOfSubcategory + '/' + this.valueOfDeadstock, {
        category: this.valueOfCategory,
        subcategory: this.valueOfSubcategory,
        deadStock: !!this.valueOfDeadstock,
      });
    },

    updateListingPg3() {
      console.log("PUT DATApg3")
      this.$http.put('api/listing/create/pg3/' + this.valueOfTitle + '/' + this.valueOfDescription1 + '/' + this.updateTags, {
        title: this.valueOfTitle,
        description1: this.valueOfDescription1,
        tags: this.updateTags,
      });
    },

    updateListingPg4() {
      console.log("PUT DATApg4")
      this.$http.put('api/listing/create/pg4/' + this.price + '/' + this.unit + '/' + this.valueOfDescription2 + '/' + this.discountPrice + '/' + this.discountPercentage + '/' + this.inventory + '/' + this.valueOfInStock, {
        price: this.price,
        unit: this.unit,
        Description2: this.valueOfDescription2,
        discountPrice: this.discountPrice,
        discountPercentage: this.discountPercentage,
        inventory: this.inventory,
        inStock: !!this.valueOfInStock,

      });
    },

    updateListingPg5() {
      console.log("PUT DATApg5")
      this.$http.put('api/listing/create/pg5/' + this.valueOfRegion + '/' + this.pickupSelected + '/' + this.shippingSelected + '/' + this.valueOfRestrictionDescription, {
        valueOfRegion: this.valueOfRegion,
        pickupSelected: this.pickupSelected,
        shippingSelected: this.shippingSelected,
        valueOfRestrictionDescription: this.valueOfRestrictionDescription,

      });
    },

    getTags() {
      this.$http.get('api/listing/tags')
          .then(result => this.tags = result.data)
    },
    onFileSelected() {
      console.log(this.pilt)
      this.selectedFile = this.pilt[0]
    },
    onUpload() {
    },
    setCompleted() {
      if (!this.firstDialogCompleted) {
        this.firstDialogCompleted = true;

        return this.createListing();
      }

      //omitting second dialog screen

      if (!this.thirdDialogCompleted) {
        return this.thirdDialogCompleted = true;
      }

      if (!this.forthDialogCompleted) {
        return this.forthDialogCompleted = true;
      }

      if (!this.fifthDialogCompleted) {
        return this.fifthDialogCompleted = true;
      }

    },
    Preview_image(e) {
      console.log(e);
      if (e.target.files && e.target.files[0]) {
        console.log("test")
      }
    },
    beforeUpdate3() {
      console.log('before update3', this)
      if (!this.thirdDialogCompleted) {
        if (this.title && this.description_1 && this.tags) this.isProceedingDisabled = false;
      }
    },
  },
}

</script>

<style scoped>

.miskit {
  padding: 0 50px 100px 50px;
}

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