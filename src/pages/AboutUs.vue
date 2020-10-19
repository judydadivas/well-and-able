<template>
    <q-layout>
        <div v-if="$q.platform.is.desktop">
            <desktop/>
        </div>

        <div v-if="$q.platform.is.mobile">
            <mobile/>
        </div>
    </q-layout>
</template>

<script>
import AboutUsDesktopVue from 'src/components/AboutUsDesktop.vue'
import AboutUsMobileVue from 'src/components/AboutUsMobile.vue'

export default {
  name: 'AboutUs',
  components: {
    desktop: AboutUsDesktopVue,
    mobile: AboutUsMobileVue
  }
}
</script>
