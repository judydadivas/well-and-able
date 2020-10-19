<template>
  <q-layout>
    <div class = "q-pb-md">
      <div class = "orientation-portrait">
      <div class = "text-bold text-grey float-left"> PREFAB HOUSING</div>
      <div class = "float-right">
        <div class = "text-weight-regular float-left q-pr-md">SORT BY</div>
        <q-select square outlined v-model="model" color = "secondary"
          style="width: 100px;" stack-label :dense="dense" class = "float-right"
          :options="options" label="LATEST"/>
      </div>

      <div class = "row q-col-gutter-md q-py-sm" style="width: 100%">
        <div class = "col">
          <div class = "text-grey-9 text-bold">TOTAL AREA</div>
          <q-select square outlined v-model="model" color = "secondary"
          style="width: 100px;" stack-label :dense="dense" class = "float-right"
          :options="area" label="Show All"/>
        </div>
        <div class = "col">
          <div class = "text-grey-9 text-bold" style="font-size: 13px">COST PER SQ.M</div>
          <q-select square outlined v-model="model" color = "secondary"
          style="width: 100px;" stack-label :dense="dense" class = "float-right"
          :options="cost" label="Show All"/>
        </div>
        <div class = "col">
          <div class = "text-grey-9 text-bold text-smaller">STOREY</div>
          <q-select square outlined v-model="model" color = "secondary"
          style="width: 100px;" stack-label :dense="dense" class = "float-right"
          :options="storey" label="Show All"/>
        </div>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img32.png"
          area = "337 SQ. M"
          title = "WAD4020-337D"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img33.png"
          area = "320 SQ. M"
          title = "WAD4019-320S"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img34.png"
          area = "221 SQ. M"
          title = "WAD4017-212D"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img32.png"
          area = "337 SQ. M"
          title = "WAD4020-337D"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img33.png"
          area = "320 SQ. M"
          title = "WAD4019-320S"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img34.png"
          area = "221 SQ. M"
          title = "WAD4017-212D"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img32.png"
          area = "337 SQ. M"
          title = "WAD4020-337D"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img33.png"
          area = "320 SQ. M"
          title = "WAD4019-320S"
          link = "/"/>
      </div>

      <div class = "q-py-sm">
        <house
          image = "img\img34.png"
          area = "221 SQ. M"
          title = "WAD4017-212D"
          link = "/"/>
      </div>
      </div>

      <div class = "orientation-landscape">
        <landscape/>
      </div>

      <footer-mobile/>
    </div>
  </q-layout>
</template>

<script>
import FooterMobileVue from './FooterMobile.vue'
import HousesVue from './Houses.vue'
import OnlineCommerceLandscapeVue from './OnlineCommerceLandscape.vue'
export default {
  name: 'OnlineCommerceMobile',
  components: {
    house: HousesVue,
    landscape: OnlineCommerceLandscapeVue,
    footerMobile: FooterMobileVue
  },
  data () {
    return {
      model: null,
      options: ['Hi', 'Nang', 'Mich'],
      area:
        ['Show All', '< 36 sq.m.', '36 sq.m. - 45 sq.m.', '46 sq.m. - 54 sq.m.', '55 sq.m. - 72 sq.m.', '73 sq.m. - 90 sq.m.', '> 90 sq.m.'],
      cost:
        ['Show All', '< 5000 USD', '5001 USD - 7000 USD', '7001 USD - 9000 USD', '9001 USD - 15000 USD', '> 15000 USD'],
      storey:
      ['Show All', 'Single Storey', 'Multiple Storey'],
      dense: true
    }
  }
}
</script>
