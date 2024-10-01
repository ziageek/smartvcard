<template>
  <div
    ref="container"
    class="container relative bg-gray-900 mx-auto text-gray-100"
    style="max-width: 960px"
  >
    <div class="px-4">
      <div style="display: flex; justify-content: center; align-items: center">
        <img
          style="max-width: 75%; "
          src="https://getbizviz.s3.amazonaws.com/SMART+VCARD+APPSUMO+HEADER.svg"
        />
      </div>
      <div class="flex items-start justify-between">
        <div
          style=""
          title="SMART vCARD - Another Software Solution By BizViz"
        ></div>
      </div>
    </div>
    <div style="display: flex;margin-top: -2%; margin-bottom: 1px">
      <div class="px-4 hidden md:flex">
        <div class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-4xl font-extrabold mt-24 md:leading-tight"
          >
            Hello Sumo-lings!👋
          </h1>

          <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
            Please share you Name, AppSumo email and AppSumo code to get your
            Smart vCard White- Label Agency license with lifetime access.
          </h2>
          <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
            After your submission, you will receive an email with your license
            key and then you'll be ready to go!
          </h2>
          <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
            Thanks so much.
          </h2>
          <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
            Regards,
          </h2>
          <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
            Jeff Baer + Team
          </h2>
        </div>
      </div>

      <div class="px-4">
        <div class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-4xl font-extrabold mt-24 md:leading-tight"
          >
            Get access now
          </h1>
          <br />
          <br />

          <div>
            <label for="firstname" class="ml-4">First name</label>
            <input
              placeholder="First Name"
              id="firstname"
              spellcheck="false"
              type="text"
              v-model="first_name"
              autocapitalize="words"
              class="
                mt-2
                px-4
                w-full
                h-12
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                hover:border-gray-600
              "
            />
          </div>
          <br />

          <div>
            <label for="firstname" class="ml-4">Last name</label>
            <input
              placeholder="Last Name"
              id="firstname"
              spellcheck="false"
              type="text"
              v-model="last_name"
              autocapitalize="words"
              class="
                mt-2
                px-4
                w-full
                h-12
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                hover:border-gray-600
              "
            />
          </div>
          <br />

          <div>
            <label for="firstname" class="ml-4"> AppSumo Email</label>
            <input
              placeholder="AppSumo Email"
              id="firstname"
              spellcheck="false"
              type="text"
              v-model="email"
              autocapitalize="words"
              class="
                mt-2
                px-4
                w-full
                h-12
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                hover:border-gray-600
              "
            />
          </div>
          <br />

          <div>
            <label for="firstname" class="ml-4"> AppSumo Code</label>
            <input
              placeholder="AppSumo Code"
              id="firstname"
              spellcheck="false"
              type="text"
              v-model="code"
              autocapitalize="words"
              class="
                mt-2
                px-4
                w-full
                h-12
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                hover:border-gray-600
              "
            />
          </div>
          <br />
          <div class="flex items-center">
            <input
              @click="agreed = !agreed"
              id="checked-checkbox"
              type="checkbox"
              :value="agreed"
              class="
                w-4
                h-4
                text-green-600
                bg-gray-100
                rounded
                border-gray-300
                focus:ring-green-500
                dark:focus:ring-green-600 dark:ring-offset-gray-800
                focus:ring-2
                dark:bg-gray-700 dark:border-gray-600
              "
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-white-900 dark:text-gray-300"
              >I agree to the Smart vCard
              <a
                style="color: white"
                href="/terms-of-service"
                class="
                  underline
                  text-green-500
                  font-extrabold
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                rel="noopener noreferrer"
                >Terms of Service</a
              >.</label
            >
          </div>
          <button
            ref="downloadPackage"
            @click="redeemCode()"
            class="
              inline-block
              bg-gray-700
              leading-none
              text-2xl
              tracking-wide
              border-2 border-transparent
              font-extrabold
              p-3
              rounded
              mt-12
              select-none
              transition-colors
              duration-200
              focus:outline-none
            "
            :title="
              agreed ? '' : 'Complete the checklist to download the package'
            "
            :class="
              agreed
                ? 'bg-green-600 cursor-pointer text-white focus:bg-green-500 hover:bg-green-500'
                : 'text-black nopointerEvent '
            "
          >
            <!-- put this after colon once you done with proje -->
            <!-- cursor-not-allowed text-black -->
            Submit
          </button>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import swal from 'sweetalert2'
window.Swal = swal
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { redeemTheCode } from './../../utils/api.js'
export default {
  components: { Header, Footer },
  head: {
    titleTemplate: 'AppSumo - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Redeem your code here.'
      }
    ]
  },
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      code: null,
      agreed: false
    }
  },
  methods: {
    isEmail(email) {
      return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
        email
      )
    },
    async redeemCode() {
      try {
        if (!this.agreed) {
          return
        }
        if (
          this.first_name === null ||
          this.last_name === null ||
          this.email === null ||
          this.code === null
        ) {
          Swal.fire({
            title: 'Error!',
            text:
              `All Fields Are Mandatory!!!` ||
              'Something bad happened, try again later',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          return
        }
        if (!this.isEmail(this.email)) {
          Swal.fire({
            title: 'Error!',
            text:
              `Email Format Is Incorrect` ||
              'Something bad happened, try again later',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          return
        }
        let response = await redeemTheCode(
          this.first_name,
          this.last_name,
          this.email,
          this.code
        )
        if (response.status !== 200) {
          Swal.fire({
            title: 'Error!',
            text:
              `${response?.data.message}` ||
              'Something bad happened, try again later',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        } else {
          window.location.replace('/thank-you')
          return
        }
      } catch (error) {
        console.log(error)
        return
      }
    }
  }
}
</script>
