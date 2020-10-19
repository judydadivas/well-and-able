<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
      <div v-if="$q.platform.is.mobile">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="dark"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </div>
        <img src="~assets/img01.jpg" class="q-pl-xl q-py-lg"/>

      <q-tabs v-if="$q.platform.is.desktop" class="text-dark q-pl-xl" indicator-color="transparent" v-model="tab" shrink stretch >
        <q-route-tab to="/#" label="Project" exact/>
        <q-route-tab to="/#" label="Building System" exact/>
        <q-route-tab to="/#" label="Materials" exact/>
        <q-route-tab to="/pressRelease" label="Press" exact/>
        <q-route-tab to="/aboutUs" label="About" exact/>
        <q-route-tab to="/#" label="Contact" exact/>
      </q-tabs>

      <q-space/>

      <q-tabs v-if="$q.platform.is.desktop" class="text-dark q-pl-xl" indicator-color="transparent" v-model="tab" shrink stretch>
        <q-route-tab to="/onlineCommerce" label="Online Shop" align="left"/>
        <q-route-tab to="/#" label="Get A Qoutation" align="left"/>
      </q-tabs>
      </q-toolbar>
    </q-header>

  <div v-if="$q.platform.is.mobile">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list class="q-pt-md">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
  </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
// eslint-disable-next-line no-unused-vars
import { Platform } from 'quasar'

const linksData = [
  {
    title: 'PROJECTS',
    link: '/'
  },
  {
    title: 'BUILDING SYSTEM',
    link: '/'
  },
  {
    title: 'MATERIALS',
    link: '/'
  },
  {
    title: 'PRESS',
    link: '/#/pressRelease'
  },
  {
    title: 'ABOUT',
    link: '/#/aboutUs'
  },
  {
    title: 'CONTACT',
    link: '/#'
  },
  {
    title: 'ONLINE COMMERCE',
    link: '/#/onlineCommerce'
  }
]

export default {
  name: 'LandingPage',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tab: ''
    }
  }
}
</script>
