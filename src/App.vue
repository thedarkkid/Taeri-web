<template>
  <v-app>
    <Header />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Test from '@/directives/test';
import Header from "@/components/layout/Header";

export default {
  name: 'App',
  directives: { Test },
  components: { Header },
  data(){
    return[

    ]
  },
  watch: {
    // make each page show a different title
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Taeri Home';
      }
    },
  }
};
</script>

<style lang="scss">

</style>
