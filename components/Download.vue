<template>
  <div id="downloadSection" class="mt-16">
    <h2 class="font-extrabold text-2xl">Download</h2>
    <div class="stepC mt-6">
      <p>Please complete the checklist to proceed,</p>
      <Check
        v-for="(item, index) in downloadCheckList"
        :downloadCheckList="downloadCheckList"
        :item="item"
        :key="index"
        :index="index"
      />
      <button
        ref="downloadPackage"
        @click="downloadPackage"
        class="
          inline-block
          bg-gray-700
          leading-none
          text-2xl
          tracking-wide
          border-2 border-transparent
          font-extrabold
          p-6
          rounded
          mt-12
          select-none
          transition-colors
          duration-200
          focus:outline-none
        "
        :title="
          downloadChecked
            ? ''
            : 'Complete the checklist to download the package'
        "
        :class="
          downloadChecked
            ? 'bg-green-600 cursor-pointer text-white focus:bg-green-500 hover:bg-green-500'
            : 'text-black nopointerEvent '
        "
      >
        <!-- put this after colon once you done with proje -->
        <!-- cursor-not-allowed text-black -->
        Download as ZIP
      </button>
      <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
        <span class="font-extrabold text-2xl" style="color:#FFFFFF;">After You Download...</span>
      <br/><br/><span><strong>DO IT YOURSELF</strong></span><br/>
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
        to get your digital business card online.
        <br /><br />
        <span><strong>DONE FOR YOU</strong></span><br/>
        Optionally host your vCard Zip folder on our
         <a
          href="https://www.ziphost.app/"
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
          target="_blank"
          >domain</a
        >
        (i.e vcard.fyi/yourname)
      </p>
    </div>
  </div>
</template>

<script>
import Check from '@/components/Check'
export default {
  props: ['downloadCheckList', 'downloadChecked', 'downloadPackage'],
  components: {
    Check
  }
}
</script>
<style>
.nopointerEvent {
  pointer-events: none;
  cursor: not-allowed;
}
</style>
