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
              title="SMART vCARD - Online Business"
            ></div
          ></NuxtLink>
          <Header />
        </div>
        <div class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight"
          >
            Customer Support
          </h1>
          <p style="margin-top: 20px">
            Video Training is
            <NuxtLink
              to="/training"
              class="
                cursor-pointer
                underline
                font-extrabold
                text-green-500
                hover:text-green-600
                focus:text-green-600
                transition-colors
                duration-200
              "
              >here</NuxtLink
            >
          </p>
          <div class="mt-16">
            <p class="font-extrabold text-2xl" style="color: #ffffff">
              Find Support
            </p>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              <span><strong>DO IT YOURSELF HOSTING</strong></span
              ><br />
              Extract the downloaded ZIP file and follow the
              <NuxtLink
                to="/hosting-guide"
                class="
                  cursor-pointer
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >Hosting&nbsp;Guide</NuxtLink
              >
              to get your Smart vCard online.<br /><br />
              <a
                href="/hosting-guide"
                style="padding: 5px 10px"
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
                Do It Yourself
              </a>
            </p>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              <span><strong>DONE FOR YOU HOSTING</strong></span
              ><br />
              Upload your ZIP file and we will take care of everything for you.
              We will send you your branded vCard link
              <!-- <NuxtLink
                to="/hosting-upgrade/"
                class="
                  cursor-pointer
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >branded vCard link</NuxtLink
              > -->
              in 1 business day! <br /><br />
              <a
              href="https://www.ziphost.app/"
                target="_blank"
                style="padding: 5px 10px"
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
                Done For You
              </a>
            </p>

            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              <span><strong>CONTACT SUPPORT</strong></span
              ><br />
              Are you having issues, do you want to make a suggestion or provide
              us feedback?<br />You can contact
              <a
                href="https://knowledgebase.getbizviz.com/"
                target="_blank"
                class="
                  cursor-pointer
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >customer support</a
              >
              here.<br /><br />
              <a
                href="https://knowledgebase.getbizviz.com/"
                target="_blank"
                style="padding: 5px 10px"
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
                Contact Support
              </a>
            </p>
          </div>
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
    titleTemplate: 'Customer Support - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Host your Smart vCard on our premium & secure short URL, vcard.fyi, for under $10/year.'
      }
    ]
  }
}
</script>
