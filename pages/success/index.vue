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
            Success
          </h1>
          <div class="mt-16">
            <p class="mt-16 border px-4 py-3 rounded border-gray-700">
              Please allow us 1 business day to respond to your enquiry.
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
    titleTemplate: 'Success - %s',
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
