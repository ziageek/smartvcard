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
      //Your method here
      this.isLoggedIn = false
    }
  },
  async mounted() {
    this.isLoggedIn = false
  }
}
</script>
