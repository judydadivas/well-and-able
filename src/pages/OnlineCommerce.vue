<template>
  <q-layout>
    <div v-if="$q.platform.is.desktop">
      <header-image
        image = "img\img19.png"
        headerTitle = "Product Catalog"/>
      <div class = "q-pa-xl"><desktop/></div>
      <footerr/>
    </div>

    <div v-if="$q.platform.is.mobile">
      <q-img src = "~assets/img19.png">
        <div class="absolute-bottom-left text-subtitle2 headerTitleLeftMobile">
          Product Catalog
        </div>
      </q-img>
      <div class = "q-pa-md"> <mobile/> </div>
    </div>
  </q-layout>
</template>

<script>
import OnlineCommerceDesktopVue from 'src/components/OnlineCommerceDesktop.vue'
import HeaderImageVue from 'src/components/HeaderImage.vue'
import OnlineCommerceMobileVue from 'src/components/OnlineCommerceMobile.vue'
import FooterVue from 'src/components/Footer.vue'
export default {
  name: 'OnlineCommerce',
  components: {
    desktop: OnlineCommerceDesktopVue,
    footerr: FooterVue,
    headerImage: HeaderImageVue,
    mobile: OnlineCommerceMobileVue
  }
}
</script>
