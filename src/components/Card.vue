<template>
  <q-card class="my-card" flat square filled>
    <q-img :src= "image"/>

    <q-card-section class = "bg-grey-2">
      <div class="text-overline text-grey">{{ country}}</div>
      <div class="text-bold">{{ title}}</div>
    </q-card-section>

    <q-card-actions class = "bg-grey-2">
      <q-btn flat label="Learn more." class = "text-capitalize" color="secondary"
        icon-right="arrow_right" to = "/recentProject"/>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: String,
    country: String,
    title: String
  }
}
</script>
