<template>
  <div
    class="flex flex-col min-h-screen bg-gray-900 mx-auto text-gray-100"
    style="max-width: 960px"
  >
    <div class="px-4">
      <div class="flex items-start justify-between pt-8">
        <NuxtLink to="/">
          <div
            class="logo w-24"
            style="width: 8rem !important"
            v-html="require(`~/assets/icons/logo.svg?include`)"
            title="SMART vCARD - Online Business"
          ></div
        ></NuxtLink>
        <Header />
      </div>

      <div id="guide" class="max-w-screen-sm">
        <h1 class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight">
          Contact Us
        </h1>
      </div>

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/Yz7UgBYcdhYCZ2SCJ4by"
        style="border: none; width: 100%; max-width: 625px"
        scrolling="no"
        id="Yz7UgBYcdhYCZ2SCJ4by"
      ></iframe>
      <script src="https://api.leadconnectorhq.com/js/form_embed.js"></script>
    </div>
    <Footer />
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

<style>
#guide {
  margin-left: 20px !important;
}
</style>
