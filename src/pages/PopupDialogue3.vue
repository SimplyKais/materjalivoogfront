
  <template>

    <div class="listContainer">
      <PopupDialogue2Content v-if="thirdDialogCompleted" />

    </div>
  </template>


<script>
import PopupDialogue4Content from "./PopupDialogue4";
export default {
  name: "PopupDialogue3",
  data () {
    return {
      thirdDialogCompleted: false,
      dialog: '',
      value: '',
      value2: '',
      value3: '',
      items: [],
      image: '',
      categories: [],
      select: '',
      search: '',
      updateTags: '',
      rules: {

        required: value => !!value || 'Required.',
      },
      title: '',
      text: '',
    }
  },
  methods: {

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




.listContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 2fr;
  height: calc(100vh - 64px);
}
</style>