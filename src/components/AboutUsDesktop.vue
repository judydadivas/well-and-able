<template>
    <q-layout>
        <header-image
            image = "img\img02.jpg"
            headerTitle = "About Us"/>
        <div class = "bg-grey-5 q-pa-xl">
            Well & Able Holdings Pte Ltd is a Singapore-based company with offices and factories in
            Shanghai and is represented by various partners in different regions of the world
            including Asia, Middle East, Europe and South Africa.
        </div>

        <div class = "q-pa-xl">
          <div class = "text-bold text-h3 q-pb-lg">Our Expertise</div>
          <div class = "row q-col-gutter-lg">
            <div class = "col">
              <q-img src="~assets/img25.png" class="imageContent"/>
              <div class = "text-bold text-h5 text-center q-pt-md" style = "color: #0180a5">
                Structural  Design
              </div>
              <div class = "text-weight-thin"></div>
            </div>
            <div class = "col">
              <q-img src="~assets/img26.png" class="imageContent"/>
              <div class = "text-bold text-h5 text-center q-pt-md" style = "color: #0180a5">
                Bim Rivet Modeling and MEP Services
              </div>
              <div class = "text-weight-thin"></div>
            </div>
            <div class = "col">
              <q-img src="~assets/img27.png" class="imageContent"/>
              <div class = "text-bold text-h5 text-center q-pt-md" style = "color: #0180a5">
                Building & Architectural Consultancy Services
              </div>
              <div class = "text-weight-thin"></div>
            </div>
            <div class = "col">
              <q-img src="~assets/img28.png" class="imageContent"/>
              <div class = "text-bold text-h5 text-center q-pt-md" style = "color: #0180a5">
                Project Management
              </div>
              <div class = "text-weight-thin"></div>
            </div>
          </div>

          <div class = "row q-pt-xl">
            <div class = "col">
              <div class = "q-pa-xl text-weight-thin">
                We design and manufacture next generation building materials (Magnesium Oxide or
                BESTATM boards, ALC, Steel Columns & Beams, etc.,) and pre-fabricated building
                systems to address the growing demand for fast, efficient and sustainable
                construction methodology.
                <q-space/><br>
                For the past twenty (20) years, we have been involved in over 250 major and
                mid-sized projects, for design, fabrication, installation and construction.
                <q-space/><br>
                Our experience is not limited to construction of chemical plants, pharmaceutical
                plants, exhibition halls, train stations, machinery stores & mega malls in major
                cities like Beijing, Shanghai, Guangzhou, Chengdu, Suzhou, Haikou etc., but we are
                also involved in affordable housing, apartments, dormitories, luxury villas, malls
                etc., in many countries across the globe.
              </div>
            </div>
            <div class = "col"> <q-img src="~assets/img29.png"/> </div>
          </div>
          <div class = "row">
            <div class = "col"> <q-img src="~assets/img30.png"/> </div>
            <div class = "col">
              <div class = "q-pa-xl text-weight-thin">
                With our company’s objective to provide green & ecological-friendly, cost effective
                housing systems, we are gearing all our efforts through extensive research in design,
                development & testing to constantly improve our manufacturing & fabrication processes
                resulting in cheaper and quicker construction.
                <q-space/><br>
                W&A is a systems & materials supplier. With our vast experience in various projects
                that were completed around the world, we are able to perform structure design with
                full structure design analysis and calculation reports. And we also work closely
                with installers to recommend and collaborate with local contractors to undertake
                the installation of our systems.
              </div>
            </div>
          </div>

          <div class = "text-bold text-h4 q-pb-lg q-pt-xl"> Our Project Presence Around the Globe. </div>
          <q-img src="~assets/img31.png"/>
        </div>

        <div class = "bg-grey-3 q-pa-xl ">
          <div class = "q-pb-xl text-bold text-h5"> Need for competitive advantage. </div>
          <div class = "text-weight-thin">
            As the costs of construction trend upwards, not withstanding economic indicators pointing to lower demand and market prices,
            it has become increasingly tough for Owners and Developers to stay ahead of Economic parameters and curves. The Technology that
            we are introducing, though environmentally friendly and in line with sustainability, is not new and in fact is widely being used
            in China, Japan, Australia, New Zealand and various regional markets. Through the adoption of exclusive and patented steel
            fabrication technology, we have been able to put together various technologies through extensive research and development, bringing
            YOU, the Owner/Developer, Governments reduced cost of construction and hence Maximize overall Profit
            <q-space/><br>
            <q-btn
              unelevated rounded color="secondary"
              label="Download Brochure"
              class="text-weight-light text-capitalize" />
          </div>
        </div>

    <footerr/>
    </q-layout>
</template>

<script>
import FooterVue from './Footer.vue'
import HeaderImageVue from './HeaderImage.vue'

export default {
  name: 'AboutUsDeskptop',
  components: {
    headerImage: HeaderImageVue,
    footerr: FooterVue
  }
}
</script>
