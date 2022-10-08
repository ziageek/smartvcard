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
            Done With You Service
          </h1>
          <div>
            <br />
            <p>
              Get personel, hassle-free service that includes Smart vCard design
              and ZIP file upload to your server (your domain), or 3 years
              hosting on our domain (vcard.fyi/yourname)
            </p>
            <p>
              <br />
              Start sharing your business contact details (vCard) the
              <strong>EASY WAY!</strong>
            </p>
            <br />
            <iframe
              src="https://msgsndr.com/widget/appointment/service/smartvcard?group=getbaer"
              style="width: 100%;border:none;overflow: hidden;"
              scrolling="no"
              id="jzveWQeec9pVQ9QiTG4i_1631012456581"
            ></iframe
            ><br />
            <script
              src="https://msgsndr.com/js/form_embed.js"
              type="text/javascript"
            ></script>
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
    titleTemplate: 'Done With You Service - %s',
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
