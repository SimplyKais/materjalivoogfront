<template>

</template>


<script>
export default {
  name: "PopupDialogueContent2",
  data() {
    return {
      secondDialogCompleted: false,
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



.automargin {
  margin: auto;
}

</style>