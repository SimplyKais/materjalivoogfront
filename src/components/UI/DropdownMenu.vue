<template>
  <v-card>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12">
          <v-autocomplete
              v-model="value"
              :items="items"
              dense
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>


  <v-card>
    <v-container>
      <v-select
          :items="allDropdownTypes.map(a => a.value)"
          label="Project Type"
      >
      </v-select>
    </v-container>
  </v-card>


</template>

<script>
export default {
  name: "DropdownList"
}
</script>

<style scoped>

</style>