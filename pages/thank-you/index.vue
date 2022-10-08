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
              style="width: 8rem !important; margin-top: -25px"
              v-html="require(`~/assets/icons/logo.svg?include`)"
              title="Smart vCard - Another Software Solution By BizViz"
            ></div
          ></NuxtLink>
          <Header />
        </div>
        <div class="max-w-screen-sm">
          <h1
            style="font-size: 35px; font-weight: bold"
            class="text-3xl md:text-5xl mt-24 md:leading-tight"
          >
            Thanks for Purchasing a Smart vCard Agency License!
          </h1>
          <!--
            md:mt-48
            -->
          <p class="mt-16 border px-4 py-3 rounded border-gray-700">
            Your Smart vCard license key should arrive momentarily at the email
            address provided during checkout. Please check your spam folder and
            whitelist our emails; license@getbizviz.com and
            support@getbizviz.com.

            <!-- <a
              href="mailto:license@getbizviz.com"
              target="_blank"
              class="
                underline
                font-extrabold
                text-green-500
                hover:text-green-600
                focus:text-green-600
                transition-colors
                duration-200
              "
              >contact support.</a
            > -->
          </p>

          <div class="step-container">
            <h2 style="font-size: 25px; font-weight: bold">
              How to White-Label Your Smart vCard Zip Folders
            </h2>
            <div class="step">
              <div class="circle one"></div>
              <p>
                Enter and save your license key.

                <!-- <a
                  href="mailto:support@getbizviz.com"
                  target="_blank"
                  class="
                underline
                font-extrabold
                text-green-500
                hover:text-green-600
                focus:text-green-600
                transition-colors
                duration-200
              "
                  >contact support.</a
                > -->
              </p>
            </div>
            <div class="step">
              <div class="circle two"></div>
              <p>Toggle on the footer credit button.</p>
            </div>
            <div class="step">
              <div class="circle three"></div>
              <p>
                Customize your footer credit as desired.
              </p>
            </div>

            <p class="mt-4" style="margin-top: 40px">
              If you are still having trouble, contact
              <a
                href="/customer-support"
                rel="noopener noreferrer"
                class="
                  underline
                  text-green-500
                  font-extrabold
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >Customer Support</a
              >.
            </p>
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
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
    Header
  },
  head: {
    titleTemplate: 'Thank You - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'SMART vCARD'
      }
    ]
  }
}
</script>
<style scoped>
.step-container {
  padding: 40px 0 20px 0;
}
.step {
  margin-top: 20px;
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
</style>
