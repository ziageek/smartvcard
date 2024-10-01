<template>
  <div class="stepC mt-1" v-if="isLoading === false">
    <input
      v-if="isLoggedIn === false"
      placeholder="Enter agency license"
      id="fullname"
      spellcheck="false"
      type="text"
      v-model="licenseKey"
      class="mt-2 px-2 h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
    />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <button
      href="/customer-support"
      class="font-extrabold tracking-wide leading-none flex-shrink-0 p-3 border-2 text-white border-gray-700 rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
      @click="loginOrBuy"
    >
      {{
        isLoggedIn === false
          ? licenseKey !== ''
            ? 'Activate'
            : 'Buy agency'
          : 'Logout'
      }}
    </button>

    <script async src="//tinder.thrivecart.com/embed/v1/thrivecart.js"></script>
    <button
      ref="myPurchaseBtn"
      data-thrivecart-account="dfy"
      data-thrivecart-tpl="v2"
      data-thrivecart-product="82"
      class="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom "
      style="background-color: #46cea3;display: none"
    >
      Buy Agency
    </button>
  </div>
</template>

<script>
import { checkLicense, logOut } from './../utils/api.js'
import swal from 'sweetalert2'
window.Swal = swal
export default {
  data() {
    return {
      isLoading: true,
      isLoggedIn: false,
      licenseKey: ''
    }
  },
  methods: {
    async loginOrBuy() {
      if (localStorage.getItem('license_key') !== null) {
        let key = localStorage.getItem('license_key')
        let myresponse = await logOut(key)
        if (myresponse.status === 200) {
          localStorage.removeItem('license_key')
          this.isLoggedIn = false
          window.location.reload()
        }
      } else {
        if (this.licenseKey === '' || this.licenseKey === null) {
          const elem = this.$refs.myPurchaseBtn
          elem.click()
        } else {
          let response = await checkLicense(this.licenseKey, 'login')
          // console.log('My response', response?.data.message)
          if (response.status !== 200) {
            this.licenseKey = ''
            // alert(
            //   `ERROR CODE:- ${response.status} REASON: ${response.data.message}`
            // )
            Swal.fire({
              title: 'Error!',
              html:
                `${response?.data.message}` ||
                'Something bad happened, try again later',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
            if (response.status === 404) {
              setTimeout(() => {
                const elem = this.$refs.myPurchaseBtn
                elem.click()
              }, 2000)
            }
            if (response.status === 400) {
              Swal.fire({
                title: 'Error!',
                text:
                  `${response?.data.message}` ||
                  'Something bad happened, try again later',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
              // alert('BYE BYE TA TA')
              return
            }
          } else if (response.status === 200) {
            localStorage.setItem('license_key', response.data.license_key)
            this.licenseKey = ''
            this.isLoggedIn = true
            Swal.fire({
              title: 'Congratulations!',
              text: 'You have successfully activated your Agency License!',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            return
            // console.log('RESPONSE SHAREEEF', response)
          }
          //check the key, if true, login, else fail.
          // this.isLoggedIn = true
          // console.log(this.isLoggedIn)
          return
          const elem = this.$refs.myPurchaseBtn
          elem.click()
        }
      }
    }
  },
  async mounted() {
    let isPresent = localStorage.getItem('license_key')
    if (isPresent !== null) {
      let licenseKey = localStorage.getItem('license_key')
      let response = await checkLicense(licenseKey, 'ignore')
      // console.log('My response', response)
      if (response.status !== 200) {
        this.isLoading = false
        localStorage.removeItem('license_key')
        // alert(
        //   `ERROR CODE:- ${response.status} REASON: `
        // )
        Swal.fire({
          title: 'Error!',
          html:
            `${response?.data.message}` ||
            'Something bad happened, try again later',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        if (response.status === 404) {
          const elem = this.$refs.myPurchaseBtn
          elem.click()
        }
        if (response.status === 400) {
          localStorage.removeItem('license_key')
        }
      } else if (response.status === 200) {
        this.isLoading = false
        this.isLoggedIn = true
        return
        // console.log('RESPONSE SHAREEEF', response)
      }
      this.isLoading = false
    } else {
      this.isLoading = false
    }
    // setTimeout(() => {
    //   this.isLoggedIn = true
    // }, 2000)
    // console.log(`the component is now mounted.`)
  }
}
</script>
