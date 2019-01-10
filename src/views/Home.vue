<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card light class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Vue Country Info</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <v-btn
                slot="activator"
                href="https://github.com/arian-amador/country-info-vuejs-graphql"
                icon
                large
                target="_blank"
              >
                <v-icon large>fingerprint</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn
                slot="activator"
                href="https://countries.trevorblades.com/"
                icon
                large
                target="_blank"
              >
                <v-icon large>graphic_eq</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-toolbar>

          <v-img src="/img/map-of-the-world-2401458_960_720.jpg" aspect-ratio="5.5"></v-img>

          <v-card-title primary-title>
            <v-flex xs12>
              <v-autocomplete
                v-model="selectedCountryCode"
                :items="orderedCountries"
                item-text="name"
                item-value="alpha2"
                label="Select Country for details"
                outline
              ></v-autocomplete>
            </v-flex>
            <v-divider></v-divider>
            <Details v-if="country" v-bind:country="country"></Details>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
import { countries } from "country-data";
import Details from "@/components/Details.vue";

export default {
  name: "home",
  components: { Details },
  data() {
    return {
      selectedCountryCode: ""
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
            code
            name
            currency
            emoji
            languages {
              code
              native
              name
            }
            continent {
              code
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
