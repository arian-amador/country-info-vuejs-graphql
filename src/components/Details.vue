<template>
  <transition name="slide-fade">
    <v-flex xs12>
      <v-layout row>
        <v-flex xs12 md6 mb-2 mr-2>
          <v-card>
            <v-card-title class="subheading font-weight-bold">General</v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Code (Alpha-2)</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ country.code }}</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Name</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ country.name }}</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Currency</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ country.currency }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs12 md6 mb-2>
          <v-card>
            <v-card-title class="subheading font-weight-bold">Continent</v-card-title>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Code (Alpha-2)</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ country.continent.code }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Name</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ country.continent.name }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile></v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 mb-2>
          <v-card>
            <v-card-title class="subheading font-weight-bold">Languages</v-card-title>

            <v-divider></v-divider>

            <v-list dense v-for="(language, key) in country.languages" v-bind:key="key">
              <v-list-tile>
                <v-list-tile-content>Name</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ language.name }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Native</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ language.native }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </transition>
</template>

<script>
export default {
  props: ["country"]
};
</script>

<style scoped>
.v-card__title .subheading {
  background-color: #205a78;
  color: #ddd;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-fade-enter {
  transform: translateY(-10px);
  opacity: 0;
  height: 0;
}
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
  height: 0;
}
</style>
