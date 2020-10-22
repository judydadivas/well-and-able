<template>
    <q-layout>
        <div v-if="$q.platform.is.desktop" class = "q-pa-xl">
            <h1>Recent Project</h1>
        </div>

        <div v-if="$q.platform.is.mobile" class = "q-pa-md">
            <h1>Recent Project</h1>
        </div>
    </q-layout>
</template>

<script>
export default {
  name: 'RecentProject'
}
</script>
