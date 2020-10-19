<template>
        <q-card class="my-card" flat square filled>
        <q-img :src= "image"/>

        <q-card-section class = "bg-grey-2">
            <div class="text-overline text-grey">{{ area }}</div>
            <div class="text-bold">{{ title}}</div>
        </q-card-section>

        <q-card-actions class = "bg-grey-2">
            <q-btn
                rounded label="View details."
                class = "text-capitalize text-weight-thin"
                color="secondary"
                :to = "link"/>
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'Houses',
  props: {
    image: String,
    area: String,
    title: String,
    link: String
  }
}
</script>
