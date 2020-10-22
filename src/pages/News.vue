<template>
  <q-layout> <news/> </q-layout>
</template>

<script>
import NewsVue from 'src/components/News.vue'
export default {
  name: 'News',
  components: {
    news: NewsVue
  }
}
</script>
