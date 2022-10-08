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
            You're Booked!
          </h1>
          <div>
            <br />
            <p>
              You have successfully scheduled a ZOOM consultation where we will
              design your Smart vCard and get it online.
            </p>
            <p>
              <br />
              Please check your email and/or mobile phone for a confirmation of
              our meeting and be certain to save it to your calendar.
            </p>
            <p>
              <br />
              We look forward to meeting you at the scheduled time!
            </p>
            <br />
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
    titleTemplate: 'Booked - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Host your Review Zip on our premium & secure short URL, vCard.fyi, for under $10/year.'
      }
    ]
  }
}
</script>
