<template>
  <v-container>
    <v-layout row wrap align-center>
      <v-flex xs12 sm4>
        <v-autocomplete
          v-model="selectedCountryCode"
          :items="orderedCountries"
          item-text="name"
          item-value="alpha2"
          label="Select Country for details"
          outline
        ></v-autocomplete>
      </v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex sm6>{{country}}</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
import { countries } from "country-data";

export default {
  name: "home",
  data() {
    return {
      selectedCountryCode: "US"
    };
  },
  computed: {
    orderedCountries() {
      return _.orderBy(countries.all, "name");
    }
  },
  apollo: {
    country: {
      query: gql`
        query Country($code: String) {
          country(code: $code) {
            name
            languages {
              name
            }
          }
        }
      `,
      variables() {
        return {
          code: this.selectedCountryCode
        };
      }
    }
  }
};
</script>

<style>
.v-menu > .v-menu__content {
  top: 60px !important;
  left: 0 !important;
}
</style>
