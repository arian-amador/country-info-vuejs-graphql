<template>
  <div class="home">
    <select v-model="selectedCountryCode">
      <option
        v-for="country in orderedCountries"
        v-bind:value="country.alpha2"
        v-bind:key="country.id"
      >{{ country.name }}</option>
    </select>
    <br>
    <span>Select Country: {{selectedCountryCode}}</span>
    <br>
    {{country}}
  </div>
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
