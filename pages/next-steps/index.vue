<template>
  <div>
      <!-- Start Engagement Widget Script -->
<script async
  crossorigin
  type="module"
  id="engagementWidget"
  src="https://cdn.chatwidgets.net/widget/livechat/bundle.js"
  data-env="portal-api"
  data-instance="Y-MQIeB8OVhrEg-V"
  data-container="#engagement-widget-container"></script>
    <div
      class="h-30 bg-gray-900 mx-auto text-gray-100"
      style="max-width: 960px"
    >
      <div class="px-4">
        <div class="flex items-start justify-between pt-8">
          <NuxtLink to="/">
            <div
              class="logo w-24"
              style="width: 8rem !important;     margin-top: -25px;"
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
            Success!
          </h1>
          <p style="margin-top:20px;">Your ZIP folder has been downloaded</p>
          <div class="mt-16">
            <p class="font-extrabold text-2xl" style="color:#FFFFFF;">
              Next Steps...
            </p>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              <span><strong>OPTION 1 - DO IT YOURSELF</strong></span
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
                style="padding: 5px 10px;"
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
            focus:outline-none"
              >
                Do it Yourself
              </a>
            </p>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              <span><strong>OPTION 2 - DONE FOR YOU</strong></span
              ><br />
              Upload your ZIP file and we will take care of everything for you.
              We will send you your branded Smart vCard
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
                >branded Smart vCard</NuxtLink
              > -->
              in 1 business day! <br /><br />
              <a
    href="https://www.ziphost.app/"
                target="_blank"
                style="padding: 5px 10px;"
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
            focus:outline-none"
              >
                Done For You
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
    titleTemplate: 'Next Steps - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Host your Smart vCard on our premium & secure short URL, vCard.fyi, for under $10/year.'
      }
    ]
  }
}
</script>
