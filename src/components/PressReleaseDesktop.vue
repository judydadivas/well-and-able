<template>
    <q-layout>
        <header-image
            image = "img\img19.png"
            headerTitle = "Press Releases"/>
        <div class = "bg-grey-5 q-pa-xl">
            Well & Able Holdings Pte Ltd is a Singapore-based company with offices and factories in
            Shanghai and is represented by various partners in different regions of the world
            including Asia, Middle East, Europe and South Africa.
        </div>

        <div class = "q-pa-xl">
            <div class = "row q-pb-xl q-col-gutter-lg">
                <div class = "col">
                    <q-img src = "img\img20.png"/>
                </div>
                <div class = "col">
                    <div class = "text-h4 text-bold">Well & Able trade company in Shanghai</div>
                    <div class = "text-weight-thin q-pb-md">May 1, 2020 </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.

                    <q-space style="height: 100px"/>
                    <q-btn
                        flat label="Learn more."
                        class = " text-weight-regular text-capitalize float-left"
                        color="secondary" icon-right="arrow_right"/>
                </div>
            </div>

            <div class = "row q-col-gutter-md">
                <div class = "col">
                    <press
                        img = "img\img21.png"
                        date = "23 January 2020"
                        title = "Modern Living @Kanyan project to provide affordable housing in laos"
                        link = "/"/>
                </div>
                <div class = "col">
                    <press
                        img = "img\img22.png"
                        date = "21 October 2019"
                        title = "Affordable Pre-Fabricated Houses in the Philippines. "
                        link = "/"/>
                </div>
                <div class = "col">
                    <press
                        img = "img\img23.png"
                        date = " 09 May 2019 "
                        title = "Vietnam Steel Fabricator Visits Well&Able Office.  "
                        link = "/"/>
                </div>
                <div class = "col">
                    <press
                        img = "img\img24.png"
                        date = " 09 May 2019 "
                        title = "West Africa conference Singapore office, Well and Able."
                        link = "/"/>
                </div>
            </div>

            <footerr/>
        </div>
    </q-layout>
</template>

<script>
import image from '../assets/img24.png'
import HeaderImageVue from './HeaderImage.vue'
import PreviousPressVue from './PreviousPress.vue'
export default {
  name: 'PressReleaseDesktop',
  components: {
    headerImage: HeaderImageVue,
    press: PreviousPressVue
  },
  data () {
    return {
      image: image
    }
  }
}
</script>
