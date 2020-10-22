<template>
    <q-layout>
        <div v-if="$q.platform.is.desktop">
            <div  class = "q-pa-xl">
                <div class = "text-bold text-h2">
                    Well & Able trade company in Shanghai
                </div>
                <hr>

                <q-img src = "img\img20.png"/>
                <div class = "text-weight-thin q-py-md text-h7" style="font-size: 15px">
                    May 1, 2020
                </div>
                <div class = "text-weight-regular q-pb-md" style = "font-size: 20px" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    <q-space/><br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <footerr/>
        </div>

        <div v-if="$q.platform.is.mobile">
            <div class = "q-pa-md">
                <news-mobile/>
            </div>
            <footer-mobile/>
        </div>
    </q-layout>
</template>

<script>
import image from '../assets/img20.png'
import FooterVue from './Footer.vue'
import FooterMobileVue from './FooterMobile.vue'
import NewsMobileVue from './NewsMobile.vue'
export default {
  name: 'News',
  components: {
    newsMobile: NewsMobileVue,
    footerr: FooterVue,
    footerMobile: FooterMobileVue
  },
  data () {
    return {
      image: image
    }
  }
}
</script>
