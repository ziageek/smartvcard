<template>
  <div>
    <div
      class="h-30 bg-gray-900 mx-auto text-gray-100"
      style="max-width: 960px"
    >
    <!-- Start Engagement Widget Script -->
<script async
  crossorigin
  type="module"
  id="engagementWidget"
  src="https://cdn.chatwidgets.net/widget/livechat/bundle.js"
  data-env="portal-api"
  data-instance="Y-MQIeB8OVhrEg-V"
  data-container="#engagement-widget-container"></script>
<!-- End Engagement Widget Script -->
      <div class="px-4">
        <div class="flex items-start justify-between pt-8">
          <NuxtLink to="/">
            <div
              class="logo w-24"
              style="width: 8rem !important; margin-top: -25px"
              v-html="require(`~/assets/icons/logo.svg?include`)"
              title="Reviews Zip - Another Software Solution By BizViz"
            ></div
          ></NuxtLink>
          <Header />
        </div>
        <div class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight"
          >
            Training Videos
          </h1>
          <!--
            md:mt-48
            -->

          <div class="mt-16" style="padding: 0">
            <h2 class="font-extrabold text-2xl" style="padding: 10px 5px">
              How to Create Your Smart vCard
            </h2>
            <div style="padding: 56.25% 0 0 0; position: relative">
              <iframe
                src="https://player.vimeo.com/video/604008968?h=3c15377f03&title=0&byline=0&portrait=0"
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                "
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div class="mt-16" style="padding: 0">
            <h2 class="font-extrabold text-2xl" style="padding: 10px 5px">
              How to Host Your Smart vCard
            </h2>
            <div style="padding: 56.25% 0 0 0; position: relative">
              <iframe
                src="https://player.vimeo.com/video/604010617?h=e02a56cc49&title=0&byline=0&portrait=0"
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                "
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>

          <div class="mt-16" style="padding: 0">
            <h2 class="font-extrabold text-2xl" style="padding: 10px 5px">
              How to Activate Your Agency License
            </h2>
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/730017080?h=b738b38cf3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                title="How to Activate Your Smart vCard Agency License"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>

          <!--<div class="mt-16" style="padding:0;">
            <h2 class="font-extrabold text-2xl" style="padding:10px 5px;">How to Add 3rd Party Scripts</h2>
           <div style="padding:56.25% 0 0 0;position:relative;">
             <iframe src="https://player.vimeo.com/video/604011972?h=e02a56cc49&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
             </iframe>
             </div>
           <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div class="mt-16" style="padding:0;">
            <h2 class="font-extrabold text-2xl" style="padding:10px 5px;">Done With You Service</h2>
           <div style="padding:56.25% 0 0 0;position:relative;">
             <iframe src="https://player.vimeo.com/video/604013985?h=e02a56cc49&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
             </iframe>
             </div>
           <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
-->
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  components: { Header, Footer },
  head: {
    titleTemplate: 'Training - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'View video tutorials on how to get the most from our review link generator.'
      }
    ]
  }
}
</script>
