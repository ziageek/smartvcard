<template>
  <div
    ref="container"
    class="container relative bg-gray-900 mx-auto text-gray-100"
    style="max-width: 960px"
  >
  <!-- Start Engagement Widget Script -->
<script async
  crossorigin
  type="module"
  id="engagementWidget"
  src="https://cdn.chatwidgets.net/widget/livechat/bundle.js"
  data-env="portal-api"
  data-instance="Y-MQIeB8OVhrEg-V"
  data-container="#engagement-widget-container"></script>
<!-- End Engagement Widget Script -->
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
        <h1 class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight">
          <!--
            md:mt-48
            -->
          Self-Hosting Guide
        </h1>
        <div class="mt-16" style="padding: 0; margin-top: 2rem">
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/604010617?h=e02a56cc49&title=0&byline=0&portrait=0"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
          Please follow the instructions as per your category to get your
          digital business card online.
        </h2>

        <p class="mt-16 border px-4 py-3 rounded border-gray-700">
          Your digital business card files are in the folder you just extracted
          from your downloaded ZIP file. This folder will be referred to as the
          "<span class="font-extrabold">bizcard folder</span>" throughout this
          guide.
        </p>

        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            I have a personal WordPress website
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Login to your cPanel account. Locate and open the file manager.
            </li>
            <li>
              In the file manager, locate the folder named "public_html" and
              create a new folder called "vcard" ( or whatever you like ) inside
              it.
            </li>
            <li>
              Upload your bizcard folder into the new folder that you just
              created in the previous step.
            </li>
            <li>
              Now your business card should be online at the address
              https://your-domain.com/vcard/bizcard-folder-name/ and is ready to
              be shared.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            My website is maintained by a developer
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Contact your developer to host the business card for you. Just
              send them the downloaded ZIP file.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            We are a company. Our website is maintained by the IT team
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Just share the details with your IT team, let them create digital
              business cards for you using
              <a
                href="https://smartvcard.com"
                target="_blank"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >SMART vCARD</a
              >.
            </li>
            <li>
              If you have generated a business card for yourself, share it with
              your IT team. Just send them the downloaded ZIP files and share
              the link to this
              <a
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                href="/hosting-guide"
                >Self-Hosting Guide</a
              >.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            I'm the developer / administrator of a website
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Create a folder called "vcard" ( or whatever you like ) in the
              project's static folder.
            </li>
            <li>Copy the bizcard folder inside the "vcard" folder.</li>
            <li>Commit changes and deploy.</li>
            <li>
              Now the business card should be online at the address
              https://your-domain/vcard/bizcard-folder/ and is ready to be
              shared.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <p class="mt-4">
            If you have doubt setting up your digital business card on any of
            these platforms, You can always
            <a
              class="
                underline
                text-green-500
                font-extrabold
                hover:text-green-600
                focus:text-green-600
                transition-colors
                duration-200
              "
              href="/customer-support"
              rel="noopener noreferrer"
              >Contact Support</a
            >
            and ask it.
          </p>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            How do I update my business card details?
          </h3>
          <p class="mt-6">
            SMART vCARD does not store any data online for you to retrieve it
            for editing. So, every card has to be manually created from scratch.
          </p>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Visit
              <NuxtLink
                to="/"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >SMART vCARD</NuxtLink
              >
              and generate a new digital business card.
            </li>
            <li>
              Extract the downloaded ZIP file and copy your bizcard folder
              containing your updated files.
            </li>
            <li>
              Follow the exact same steps as per your category listed above to
              update your digital business card.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            How do I add another business card to my website?
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Visit
              <NuxtLink
                to="/"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >SMART vCARD</NuxtLink
              >
              and generate a digital business card.
            </li>
            <li>
              Extract the downloaded ZIP file and copy the bizcard folder.
            </li>
            <li>
              Follow the exact same steps as per your category listed above to
              add the digital business card.
            </li>
            <li>
              Place the copied folder inside the same folder where you already
              have your bizcard folders.
            </li>
          </ul>
        </div>

        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">I don't have a website</h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              You can host your digital business card on our premium and secure
              short URL , vCard.fyi, for less than $20/year
            </li>
            <li>
              Your link will be branded to YOU! ie: https://vcard.fyi/yourname
            </li>
            <li>
              Hosting includes unlimited changs to your business card. To update
              and make changes, simply generate a new zip folder at
              <a
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                href="/"
                rel="noopener noreferrer"
                >SMART vCARD</a
              >, and send your file to
              <NuxtLink
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                to="/customer-support"
                rel="noopener noreferrer"
                >Customer Support</NuxtLink
              >
            </li>
            <li>
              Branded links are offered on first come, first served basics. To
              learn more Click on the link

              <NuxtLink
                to="/customer-support"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >Customer Support</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
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
    titleTemplate: 'Hosting Guide - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Find instructions for how you can host your digital business card zip folder on your domain.'
      }
    ]
  }
}
</script>
