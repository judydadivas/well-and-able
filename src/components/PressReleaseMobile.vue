<template>
    <div>
        <q-img src = "~assets/img02.jpg">
            <div class="absolute-bottom-left text-subtitle2 headerTitleLeftMobile"> Press Releases </div>
        </q-img>
        <div class = "bg-grey-5 q-pa-md">
            Well & Able Holdings Pte Ltd is a Singapore-based company with offices and factories in
            Shanghai and is represented by various partners in different regions of the world
            including Asia, Middle East, Europe and South Africa.
        </div>

        <div class = "q-pa-md">
        <q-img src = "img\img20.png"/>

        <div class = "text-h4 text-bold q-pt-md">Well & Able trade company in Shanghai</div>
        <div class = "text-weight-thin q-pb-md">May 1, 2020 </div>
        <div class = "q-pb-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.<q-space/>
        <q-btn
            flat label="Learn more."
            class = " text-weight-regular text-capitalize float-left"
            color="secondary" icon-right="arrow_right" to = "/news"/>
        </div>

        <press
            img = "img\img21.png"
            date = "23 January 2020"
            title = "Modern Living @Kanyan project to provide affordable housing in laos"
            link = "/"/>

        <press
            img = "img\img22.png"
            date = "21 October 2019"
            title = "Affordable Pre-Fabricated Houses in the Philippines. "
            link = "/"
            class = "q-pt-md"/>

        <press
            img = "img\img23.png"
            date = " 09 May 2019 "
            title = "Vietnam Steel Fabricator Visits Well&Able Office.  "
            link = "/"
            class = "q-pt-md"/>

        <press
            img = "img\img24.png"
            date = " 09 May 2019 "
            title = "West Africa conference Singapore office, Well and Able."
            link = "/"/>
        </div>
        <footerMobile/>
    </div>
</template>

<script>
import FooterMobileVue from './FooterMobile.vue'
import PreviousPressVue from './PreviousPress.vue'
export default {
  name: 'PressReleaseMobile',
  components: {
    press: PreviousPressVue,
    footerMobile: FooterMobileVue
  }
}
</script>
