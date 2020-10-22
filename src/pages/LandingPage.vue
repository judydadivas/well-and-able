<template>
  <q-page class="flex flex-center">
    <div v-if="$q.platform.is.desktop"> <desktop/> </div>

    <div v-if="$q.platform.is.mobile"> <mobile/> </div>
  </q-page>
</template>

<script>
import LandingPageDesktopVue from 'src/components/LandingPageDesktop.vue'
import LandingPageMobileVue from 'src/components/LandingPageMobile.vue'

export default {
  name: 'LandingPage',
  components: {
    desktop: LandingPageDesktopVue,
    mobile: LandingPageMobileVue
  }
}
</script>
