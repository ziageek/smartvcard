<template>
  <div>
    <div
      class="h-30 bg-gray-900 mx-auto text-gray-100"
      style="max-width: 960px"
    >
      <div class="px-4">
        <div class="flex items-start justify-between pt-8">
          <NuxtLink to="/">
            <div
              class="logo w-24"
              style="width: 8rem !important"
              v-html="require(`~/assets/icons/logo.svg?include`)"
              title="SMART vCARD - Another Software Solution By BizViz"
            ></div
          ></NuxtLink>
          <Header />
        </div>
        <div class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight"
          >
            Done For You Hosting
          </h1>
          <!--
            md:mt-48
            -->
          <!--
   	<h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
          Reserve your <b>JEFF GIVE ME NAME FOR IT</b> name today!
        </h2> -->
          <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
            Reserve your <b>branded Smart vCard link</b> today!
          </h2>

          <div style="margin-top: 30px">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_dheshii6.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 50px"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="mt-16" style="margin-top: 35px">
            <div
              class="mt-16 border px-4 py-3 rounded border-gray-700"
              style="margin-top: 35px"
            >
              <span class="font-extrabold text-2xl" style="color: #ffffff"
                >Benefits</span
              >
              <div class="step-container">
                <div class="step">
                  <div class="circle one"></div>
                  <p>One business day delivery</p>
                </div>
                <div class="step">
                  <div class="circle two"></div>
                  <p>Personalized, branded vCard link</p>
                </div>
                <div class="step">
                  <div class="circle three"></div>
                  <p>Safe and secure hosting</p>
                </div>
                <div class="step">
                  <div class="circle four"></div>
                  <p>Unlimited Smart vCard changes</p>
                </div>
                <div class="step">
                  <div class="circle five"></div>
                  <!-- <p>14-day free trial, no credit card required<sup>*</sup></p> -->
                  <p style="color: #ffb905">
                    30 days free hosting, no credit card required<sup>*</sup>
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4" style="font-size: 12px; padding-left: 20px">
              <sup>*</sup>Only $19.99/year after your free trial
              <!-- Only $19.99/year after your 14-day trial -->
            </p>
          </div>
          <div class="mt-16">
            <!--   <h3 class="font-extrabold text-2xl">
           Send Us Your Zip Folder
          </h3>-->
            <div class="mt-4 flex flex-wrap items-center">
              <a
                href="#cb09a53d79"
                class="
                  font-extrabold
                  leading-none
                  text-lg
                  tracking-wide
                  select-none
                  flex-shrink-0
                  p-5
                  mt-2
                  mr-2
                  text-white
                  bg-green-500
                  rounded
                  hover:bg-green-600
                  focus:bg-green-600
                  transition-colors
                  duration-200
                  focus:outline-none
                "
              >
                Upload Now
              </a>
            </div>
          </div>

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
    titleTemplate: 'Hosting Upgrade - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Host your digital business card on our premium & secure short URL, vCard.fyi, for under $10/year.'
      }
    ]
  }
}
</script>
<style scoped>
.step-container {
  padding: 5px 0 10px 0;
}
.step {
  margin-top: 8px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.step .circle {
  width: 26px;
  height: 26px;
  border: 2px solid #d4d9e0;
  border-radius: 50%;
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
.step p {
  margin: 0;
  margin-left: 36px;
}
.step .circle.one:after {
  content: '1';
}
.step .circle.two:after {
  content: '2';
}
.step .circle.three:after {
  content: '3';
}
.step .circle.four:after {
  content: '4';
}
.step .circle.five:after {
  content: '5';
}
.step .circle.six:after {
  content: '6';
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
sup {
  font-size: x-large;
  vertical-align: text-bottom;
}
</style>
