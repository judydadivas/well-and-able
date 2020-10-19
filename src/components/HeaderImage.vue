<template>
  <div>
    <q-img :src= "image">
      <div class="absolute-bottom-left text-subtitle2 headerTitleLeft"> {{headerTitle}} </div>
    </q-img>
  </div>
</template>

<script>
export default {
  name: 'HeaderImage',
  props: {
    headerTitle: String,
    image: String
  }
}
</script>
