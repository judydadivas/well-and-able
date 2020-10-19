<template>
  <q-layout>
    <div class = "q-pb-xl">
      <div class = "text-bold text-h5 text-grey float-left"> PREFAB HOUSING</div>
      <div class = "float-right">
          <div class = "text-weight-regular float-left q-pr-md q-pt-md">SORT BY</div>
            <q-select square outlined v-model="model" color = "secondary"
              style="width: 200px" class = "float-right"
              :options="options" label="LATEST"/>
      </div>
    </div>

    <div class = "row" style="width:100%">
      <div class = "col-3">
        <div class = "text-grey-9 q-pa-xs text-bold">TOTAL AREA</div>
          <q-option-group
            v-model="group"
            :options="totalArea"
            size="xs"
            color="dark"
            class = "q-pb-lg"
          />

          <div class = "text-grey-9 q-pa-xs text-bold">COST PER SQ.M (USD)</div>
            <q-option-group
              v-model="group1"
              :options="cost"
              size="xs"
              color="dark"
              class = "q-pb-lg"
            />

          <div class = "text-grey-9 q-pa-xs text-bold">STOREY</div>
            <q-option-group
              v-model="group2"
              :options="storey"
              size="xs"
              color="dark"
              class = "q-pb-lg"
            />
       </div>

      <div class = "col-9 q-pa-xl">
        <div class = "row q-col-gutter-md q-pb-lg">
          <div class = "col">
            <house
              image = "img\img32.png"
              area = "337 SQ. M"
              title = "WAD4020-337D"
              link = "/"/>
          </div>

          <div class = "col">
            <house
              image = "img\img33.png"
              area = "320 SQ. M"
              title = "WAD4019-320S"
              link = "/"/>
          </div>

          <div class = "col">
            <house
              image = "img\img34.png"
              area = "221 SQ. M"
              title = "WAD4017-212D"
              link = "/"/>
          </div>
        </div>

        <div class = "row q-col-gutter-md q-pb-lg">
          <div class = "col">
            <house
              image = "img\img32.png"
              area = "337 SQ. M"
              title = "WAD4020-337D"
              link = "/"/>
          </div>

          <div class = "col">
            <house
              image = "img\img33.png"
              area = "320 SQ. M"
              title = "WAD4019-320S"
              link = "/"/>
          </div>

          <div class = "col">
            <house
              image = "img\img34.png"
              area = "221 SQ. M"
              title = "WAD4017-212D"
              link = "/"/>
          </div>
        </div>

        <div class = "row q-col-gutter-md q-pb-lg">
          <div class = "col">
            <house
              image = "img\img32.png"
              area = "337 SQ. M"
              title = "WAD4020-337D"
              link = "/"/>
          </div>

          <div class = "col">
            <house
              image = "img\img33.png"
              area = "320 SQ. M"
              title = "WAD4019-320S"
              link = "/"/>
          </div>

          <div class = "col">
            <house
              image = "img\img34.png"
              area = "221 SQ. M"
              title = "WAD4017-212D"
              link = "/"/>
          </div>
        </div>
      </div>
    </div>

    <footerr/>
  </q-layout>
</template>

<script>
import image from '../assets/img19.png'
import FooterVue from './Footer.vue'
import HousesVue from './Houses.vue'
export default {
  name: 'OnlineCommerDesktop',
  components: {
    house: HousesVue,
    footerr: FooterVue
  },
  data () {
    return {
      model: null,
      image: image,
      options: ['Hi', 'Nang', 'Mich'],
      group: 'totalArea',
      totalArea: [
        {
          label: 'Show All',
          value: 'area1'
        },
        {
          label: '< 36 sq.m.',
          value: 'area2'
        },
        {
          label: '36 sq.m. - 45 sq.m.',
          value: 'area3'
        },
        {
          label: '46 sq.m. - 54 sq.m.',
          value: 'area4'
        },
        {
          label: '55 sq.m. - 72 sq.m.',
          value: 'area5'
        },
        {
          label: '73 sq.m. - 90 sq.m.',
          value: 'area6'
        },
        {
          label: '> 90 sq.m.',
          value: 'area7'
        }
      ],
      group1: 'cost',
      cost: [
        {
          label: 'Show All',
          value: 'cost1'
        },
        {
          label: '< 5000 USD',
          value: 'cost2'
        },
        {
          label: '5001 USD - 7000 USD',
          value: 'cost3'
        },
        {
          label: '7001 USD - 9000 USD',
          value: 'cost4'
        },
        {
          label: '9001 USD - 15000 USD',
          value: 'cost5'
        },
        {
          label: '> 15000 U',
          value: 'cost6'
        }
      ],
      group2: 'storey',
      storey: [
        {
          label: 'Show All',
          value: 'storey1'
        },
        {
          label: 'Single Storey',
          value: 'storey2'
        },
        {
          label: 'Multiple Storey',
          value: 'storey3'
        }
      ]
    }
  }
}
</script>
