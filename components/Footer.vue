<template>
  <footer class="h-30 mt-32 mx-4 flex flex-col">
    <div class="flex flex-col justify-center items-center">
      <p
        class="mt-1 mb-8 text-center text-xs text-gray-400"
        style="font-size: 16px; font-weight: 800"
      >
        <a
          href="/"
          aria-current="page"
          class="
            underline
            text-green-500
            font-extrabold
            hover:text-green-600
            focus:text-green-600
            transition-colors
            duration-200
            nuxt-link-exact-active nuxt-link-active
          "
          rel="noopener noreferrer"
          style="font-size: 16px; font-weight: 800"
        >
          Home
        </a>
        |
        <a
          href="/hosting-guide"
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
          style="font-size: 16px; font-weight: 800"
        >
          Self-Hosting Guide
        </a>
        |
        <!-- <a
          href="/hosting-upgrade/"
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
          style="font-size: 16px; font-weight: 800"
        >
          Host with Us
        </a>
        | -->
        <a
          href="/training"
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
          style="font-size: 16px; font-weight: 800"
        >
          Training
        </a>
        |
        <a
          href="/customer-support"
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
          style="font-size: 16px; font-weight: 800"
          >Support</a
        >
      </p>
      <a href="/">
        <div
          style="height: 140px"
          class="ftr logo w-12"
          v-html="require(`~/assets/icons/footer_logo.svg?include`)"
        ></div
      ></a>
      <!-- <p class="font-extrabold leading-tight">
        Digital&nbsp;Business&nbsp;Card
        <br />
        Generator
      </p> -->
      <p style="color: rgb(255, 255, 255)">
        Copyright © 2024
        <a
          href="https://getbizviz.com/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: rgb(255, 255, 255)"
          >Smart vCard</a
        >
      </p>
      <p
        class="mt-1 mb-8 text-center text-xs text-gray-400"
        style="color: rgb(211, 211, 211)"
      >
        <a
          style="color: rgb(255, 255, 255)"
          href="/privacy-policy"
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
          >Privacy&nbsp;Policy
        </a>
        |
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
        >
        |
        <a
          style="color: white"
          href="/cookie-policy"
          class="
            underline
            text-green-500
            font-extrabold
            hover:text-green-600
            focus:text-green-600
            transition-colors
            duration-200
            nuxt-link-exact-active nuxt-link-active
          "
          rel="noopener noreferrer"
          >Cookie Policy</a
        >
        |
        <a
          style="color: white"
          href="/acceptable-use-policy"
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
          >Acceptable Use Policy</a
        >
      </p>
      <p class="mt-1 mb-8 text-center text-xs text-gray-400">
        <a
          class="underline text-emerald-600 font-extrabold hover:text-emerald-500 focus:text-emerald-500 transition-colors duration-200"
          href="https://github.com/ziageek/smartvcard"
          target="_blank"
          rel="noopener noreferrer"
          >View&nbsp;Source</a
        >
        | AGPLv3 License
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.ftr {
  width: 200px;
  height: 110px;
}

/* .footer_stick {
  position: relative;
  bottom: 0;
} */
</style>
