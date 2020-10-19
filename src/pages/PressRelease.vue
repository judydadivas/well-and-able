<template>
    <q-layout>
        <div v-if="$q.platform.is.desktop">
          <desktop/>
          <footerr/>
        </div>

        <div v-if="$q.platform.is.mobile">
            <mobile/>
        </div>
    </q-layout>
</template>

<script>
import PressReleaseMobileVue from 'src/components/PressReleaseMobile.vue'
import PressReleaseDesktopVue from 'src/components/PressReleaseDesktop.vue'
import FooterVue from 'src/components/Footer.vue'
export default {
  name: 'PressRelease',
  components: {
    desktop: PressReleaseDesktopVue,
    mobile: PressReleaseMobileVue,
    footerr: FooterVue
  }
}
</script>
