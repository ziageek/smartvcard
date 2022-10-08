<template>
  <div
    ref="container"
    class="container relative bg-gray-900 mx-auto text-gray-100"
    style="max-width: 960px"
  >
    <div
      v-if="content"
      id="notificationContainer"
      class="flex justify-center fixed top-0 left-0 right-0 bottom-0 items-center z-50 bg-black bg-opacity-80"
    >
      <div
        class="flex items-start notification content bg-gray-800 text-gray-100 rounded relative z-50 mx-8 max-w-md p-2"
      >
        <div class="whitespace-pre-line p-2" v-html="content"></div>
        <div
          @click="clearContent()"
          class="w-8 cursor-pointer flex-shrink-0 p-1 focus:outline-none rounded bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 absolute -top-4 -right-4"
          v-html="require(`~/assets/icons/x.svg?include`)"
        ></div>
      </div>
    </div>

    <transition name="drop">
      <div
        v-if="inView || showPreview"
        class="fixed top-0 w-full z-30 bg-gray-900 justify-between items-center flex md:hidden"
      >
        <div
          class="logo w-16 m-4"
          v-html="require(`~/assets/icons/logo.svg?include`)"
        ></div>
        <button
          class="p-3 mx-4 font-extrabold rounded tracking-wide focus:outline-none select-none"
          :class="showPreview ? 'bg-gray-700' : 'bg-green-600'"
          @click="!opening && togglePreview()"
        >
          {{ showPreview ? 'Close preview' : 'Open preview' }}
        </button>
      </div>
    </transition>
    <transition name="fade">
      <Preview
        v-show="showPreview"
        class="fixed top-20 w-full bottom-0 z-20 border-none rounded-b-none"
        ref="html"
        :username="username"
        :genInfo="genInfo"
        :images="images"
        :featured="featured"
        :colors="colors"
        :primaryActions="primaryActions"
        :secondaryActions="secondaryActions"
        :PreviewMode="PreviewMode"
        :downloadVcard="downloadVcard"
        :footerCredit="footerCredit"
        :simplifyCard="simplifyCard"
        :showAlert="showAlert"
        :hasLightBG="hasLightBG"
        :downloadKey="downloadKey"
        :pubKeyIsValid="pubKeyIsValid"
      />
    </transition>

    <div class="px-4">
      <div class="flex items-start justify-between pt-8">
        <div
          style="width: 8rem !important; color: black !important"
          class="logo w-24"
          v-html="require(`~/assets/icons/logo.svg?include`)"
          title="SMART vCARD - Another Software Solution By BizViz"
        ></div>
        <Header />
      </div>
      <h1
        class="text-3xl md:text-5xl font-extrabold mt-24 md:mt-48 md:leading-tight"
      >
        Digital Business Card Generator
      </h1>

      <p class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
        SMART vCARD helps you create beautiful, responsive HTML&#8209;based
        digital business cards that can be hosted on your domain or ours.
      </p>
      <ul class="mt-4 text-gray-400">
        <li>
          -&ensp;Smart vCard is a <b>FREE</b> digital business card generator
          tool
        </li>
        <li>
          -&ensp;Generate unlimited digital business cards for you and your team
        </li>
        <li>-&ensp;.vcf file included with every business card</li>
        <li>
          -&ensp;Share your contact details effortlessly by link or QR code
        </li>
        <li>-&ensp;Host your card for free on your domain</li>
        <li>-&ensp;Optionally host on our short URL (ie:vcard.fyi/yourname)</li>
      </ul>
      <div class="mt-4 flex flex-wrap items-center">
        <button
          class="font-extrabold leading-none text-lg tracking-wide select-none flex-shrink-0 p-5 mt-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600 focus:bg-green-600 transition-colors duration-200 focus:outline-none"
          @click="create()"
        >
          Create your own
        </button>
        <a
          class="font-extrabold leading-none text-lg tracking-wide flex-shrink-0 p-5 mt-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200"
          href="https://getbizviz.com/vcard/"
          target="_blank"
          >View demo</a
        >
      </div>
    </div>
    <div class="md:grid md:grid-cols-2">
      <div class="px-4 mt-32">
        <div ref="create" id="step-1" class="pt-8">
          <h2 class="font-extrabold text-2xl">Image attachments</h2>
          <div class="stepC">
            <Attachment
              :content="images"
              type="logo"
              :resizeImage="resizeImage"
              label="Upload your brand logo"
              description="suggested format: svg, png or gif"
              :showAlert="showAlert"
            />
            <Attachment
              :content="images"
              type="photo"
              :resizeImage="resizeImage"
              label="Upload your headshot"
              description="suggested format: jpeg, png or gif"
              :showAlert="showAlert"
            />
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              Recommended brand logo size is 350 x 100 pixels. Recommended
              headshot is 300 x 300 pixels.
            </p>
          </div>
        </div>
        <div id="step-2" class="mt-16">
          <h2 class="font-extrabold text-2xl">vCard information</h2>
          <div class="stepC mt-6 grid grid-cols-2 gap-4">
            <div>
              <label for="firstname" class="ml-4">First name</label>
              <input
                id="firstname"
                spellcheck="false"
                type="text"
                v-model="genInfo.fname"
                autocapitalize="words"
                class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
              />
            </div>
            <div>
              <label for="lastname" class="ml-4">Last name</label>
              <input
                id="lastname"
                spellcheck="false"
                type="text"
                v-model="genInfo.lname"
                autocapitalize="words"
                class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
              />
            </div>
          </div>

          <div class="stepC mt-6">
            <label for="pronouns" class="ml-4">Gender pronouns</label>
            <input
              id="pronouns"
              spellcheck="false"
              type="text"
              v-model="genInfo.pronouns"
              placeholder="He/Him/His"
              autocapitalize="words"
              class="mt-2 px-4 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
            />
          </div>

          <div class="stepC mt-6">
            <label for="job-title" class="ml-4">Job title</label>
            <input
              id="job-title"
              type="text"
              spellcheck="true"
              v-model="genInfo.title"
              class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
            />
          </div>
          <div class="stepC mt-6">
            <label for="business-name" class="ml-4">Business name</label>
            <input
              id="business-name"
              spellcheck="false"
              type="text"
              :value="genInfo.biz"
              @input="genInfo.biz = $event.target.value"
              class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
            />
          </div>
          <div class="stepC mt-6">
            <label for="business-address" class="ml-4">Business address</label>
            <input
              placeholder="123 Main St, City, ST 12345"
              id="business-address"
              :value="genInfo.addr"
              @input="genInfo.addr = $event.target.value"
              class="block mt-2 px-4 py-3 w-full bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 resize-none hover:border-gray-600"
              rows="4"
            />
          </div>
          <div class="stepC mt-6">
            <label for="business-description" class="ml-4"
              >Business description
            </label>
            <textarea
              id="business-description"
              :value="genInfo.desc"
              @input="genInfo.desc = $event.target.value"
              class="block mt-2 px-4 py-3 w-full bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 resize-none hover:border-gray-600"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div id="step-3" class="mt-16">
          <h2 class="font-extrabold text-2xl">Primary actions</h2>
          <draggable
            v-model="primaryActions"
            handle=".drag"
            animation="1"
            ghostClass="ghost"
          >
            <transition-group type="transition" name="list">
              <Action
                v-for="(item, index) in primaryActions"
                :key="'item' + index"
                name="primaryActions"
                :type="primaryActions"
                :item="item"
                :index="index"
                :buttonBg="colors.buttonBg.color"
                :removeAction="removeAction"
              />
            </transition-group>
          </draggable>
          <br />
          <input
            spellcheck="false"
            type="text"
            v-model="filterPrimary"
            placeholder="Search an action"
            class="px-4 mb-2 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
            @keydown.esc="clearFilterActions"
            @keypress.enter="
              filteredAction('filteredPrimaryActions', 'primaryActions')
            "
          />

          <div
            class="stepC actions mt-6 border-gray-800"
            :class="{ 'border-t pt-6': primaryActions.length }"
          >
            <button
              v-for="(action, index) in filteredPrimaryActions"
              :key="index"
              @click="addAction('primaryActions', action.name)"
              class="p-3 flex-shrink-0 rounded-full hover:scale-125 focus:scale-125 transform transition-transform duration-200 focus:outline-none"
              :style="{
                backgroundColor: `${colors.buttonBg.color}`
              }"
              :title="
                action.name.substr(0, 1).toUpperCase() + action.name.slice(1)
              "
              :aria-label="action.name"
            >
              <div
                class="w-6 h-6 action"
                v-html="require(`~/assets/icons/${action.name}.svg?include`)"
              ></div>
            </button>
          </div>
        </div>
        <div id="step-4" class="mt-16">
          <h2 class="font-extrabold text-2xl">Secondary actions</h2>

          <draggable
            v-model="secondaryActions"
            handle=".drag"
            animation="1"
            ghostClass="ghost"
          >
            <transition-group type="transition" name="list">
              <Action
                v-for="(item, index) in secondaryActions"
                :key="'item' + index"
                name="secondaryActions"
                :type="secondaryActions"
                :item="item"
                :index="index"
                :removeAction="removeAction"
              /> </transition-group
          ></draggable>
          <br />
          <input
            spellcheck="false"
            type="text"
            v-model="filterSecondary"
            placeholder="Search an action"
            class="px-4 mb-2 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
            @keydown.esc="clearFilterActions"
            @keypress.enter="
              filteredAction('filteredSecondaryActions', 'secondaryActions')
            "
          />

          <div
            class="stepC actions mt-6 border-gray-800"
            :class="{ 'border-t pt-6': secondaryActions.length }"
          >
            <button
              v-for="(action, index) in filteredSecondaryActions"
              :key="index"
              @click="addAction('secondaryActions', action.name)"
              class="p-3 flex-shrink-0 rounded-full hover:scale-125 focus:scale-125 transform transition-transform duration-200 focus:outline-none"
              :style="{ background: action.color }"
              :title="
                action.name.substr(0, 1).toUpperCase() + action.name.slice(1)
              "
            >
              <div
                class="w-6 h-6"
                v-html="require(`~/assets/icons/${action.name}.svg?include`)"
              ></div>
            </button>
          </div>
        </div>
        <div id="step-5" class="mt-16">
          <h2 class="font-extrabold text-2xl">Featured content</h2>
          <div class="stepC">
            <draggable
              v-model="featured"
              handle=".drag"
              animation="1"
              ghostClass="ghost"
            >
              <transition-group type="transition" name="list">
                <Featured
                  v-for="(content, index) in featured"
                  :key="'content' + index"
                  :featured="featured"
                  :resizeImage="resizeImage"
                  :index="index"
                  label="Attach content"
                  mimetypes="image/jpeg, image/png, audio/mpeg, video/mp4, video/webm, application/pdf"
                  :showAlert="showAlert"
                /> </transition-group
            ></draggable>

            <div class="flex mt-6">
              <div class="flex flex-wrap items-center">
                <button
                  class="p-3 rounded bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none"
                  @click="addFeature()"
                  aria-label="Add section"
                >
                  <div
                    class="w-6 h-6"
                    v-html="require(`~/assets/icons/add.svg?include`)"
                  ></div>
                </button>
                <p class="ml-3 leading-none">Add section</p>
              </div>
            </div>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              Supported media file formats: jpeg, png, mp3, mp4, webm and pdf
            </p>
          </div>
        </div>

        <div id="step-6" class="mt-16">
          <h2 class="font-extrabold text-2xl">Customize the footer credit?</h2>
          <div class="stepC mt-6">
            <div class="flex items-center">
              <div
                class="relative group inline-block w-24 h-12 mr-3 align-middle select-none transition duration-200 ease-in bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600 cursor-pointer focus:outline-none"
                :class="{
                  'bg-green-600 hover:bg-green-500 focus:bg-green-500': footerCreditCustom
                }"
                tabindex="0"
                @click="footerCreditCustom = !footerCreditCustom"
              >
                <!-- <transition name="slide"> -->
                <input
                  type="checkbox"
                  :value="footerCreditCustom"
                  id="footerCreditCustom"
                  v-model="footerCreditCustom"
                  class="toggle-switch absolute block w-10 h-10 m-1 rounded border-4 border-transparent appearance-none cursor-pointer transition-colors duration-200 focus:outline-none bg-white"
                />

                <!-- </transition> -->
              </div>
              <p>
                {{
                  footerCreditCustom
                    ? 'You have an active agency license.'
                    : 'No, thanks'
                }}
              </p>

              <br />

              <script async src="XXXXXXXX"></script>
              <button
                ref="myPurchaseBtn"
                data-thrivecart-account="XXX"
                data-thrivecart-tpl="XXXX"
                data-thrivecart-product="XXXX"
                class="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom "
                style="background-color: #46cea3;display: none"
              >
                Buy Agency
              </button>
            </div>

            <div
              :style="{
                display: footerCreditCustom ? 'flex' : 'none',
                flexDirection: 'column'
              }"
            >
              <div class="mt-6">
                <label for="before-text-link" class="ml-4">Footer text</label>
                <input
                  id="before-text-link"
                  spellcheck="false"
                  type="before-text-link"
                  placeholder="Created by"
                  :value="genInfo.beforeTextLink"
                  @input="genInfo.beforeTextLink = $event.target.value"
                  class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
                />
              </div>
              <div class="mt-6">
                <label for="linkedText" class="ml-4">Link Text</label>
                <input
                  id="linkedText"
                  spellcheck="false"
                  type="linkedText"
                  placeholder="Your Brand"
                  :value="genInfo.linkedText"
                  @input="genInfo.linkedText = $event.target.value"
                  class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
                />
              </div>
              <div class="mt-6">
                <label for="url" class="ml-4">URL</label>
                <input
                  id="url"
                  spellcheck="false"
                  type="url"
                  placeholder="https://example.com"
                  :value="genInfo.url"
                  @input="genInfo.url = $event.target.value"
                  class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="step-6" class="mt-16">
          <h2 class="font-extrabold text-2xl">Simplify Your Visible vCard?</h2>
          <div class="stepC mt-6">
            <div class="flex items-center">
              <div
                class="relative group inline-block w-24 h-12 mr-3 align-middle select-none transition duration-200 ease-in bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600 cursor-pointer focus:outline-none"
                :class="{
                  'bg-green-600 hover:bg-green-500 focus:bg-green-500': simplifyCard
                }"
                tabindex="0"
                @click="simplifyCard = !simplifyCard"
                @keypress.space.enter.prevent="simplifyCard = !simplifyCard"
              >
                <!-- <transition name="slide"> -->
                <input
                  type="checkbox"
                  name="toggle"
                  aria-label="Toggle footer credit"
                  id="toggle"
                  v-model="simplifyCard"
                  class="toggle-switch absolute block w-10 h-10 m-1 rounded border-4 border-transparent appearance-none cursor-pointer transition-colors duration-200 focus:outline-none bg-white"
                  tabindex="-1"
                />
              </div>
              <p>
                {{
                  simplifyCard
                    ? 'Encourage downloads by featuring the Save Contact button only'
                    : 'Display all actions and content'
                }}
              </p>

              <br />

              <script
                async
                src="//tinder.thrivecart.com/embed/v1/thrivecart.js"
              ></script>
              <button
                ref="myPurchaseBtn"
                data-thrivecart-account="XXX"
                data-thrivecart-tpl="XXXX"
                data-thrivecart-product="XXXX"
                class="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom "
                style="background-color: #46cea3;display: none"
              >
                Buy Agency
              </button>
            </div>
          </div>
        </div>

        <div id="step-6" class="mt-16">
          <h2 class="font-extrabold text-2xl">Search Engine Visibility?</h2>
          <div class="stepC mt-6">
            <div class="flex items-center">
              <div
                class="relative group inline-block w-24 h-12 mr-3 align-middle select-none transition duration-200 ease-in bg-gray-700 rounded hover:bg-gray-600 focus:bg-gray-600 cursor-pointer focus:outline-none"
                :class="{
                  'bg-green-600 hover:bg-green-500 focus:bg-green-500': seoOptimization
                }"
                tabindex="0"
                @click="seoOptimization = !seoOptimization"
              >
                <!-- <transition name="slide"> -->
                <input
                  type="checkbox"
                  :value="seoOptimization"
                  id="seoOptimization"
                  v-model="seoOptimization"
                  class="toggle-switch absolute block w-10 h-10 m-1 rounded border-4 border-transparent appearance-none cursor-pointer transition-colors duration-200 focus:outline-none bg-white"
                />
              </div>
              <p>
                {{
                  seoOptimization
                    ? 'Encourage search engine visibility'
                    : 'Discourage search engine visibility'
                }}
              </p>

              <br />

              <script
                async
                src="//tinder.thrivecart.com/embed/v1/thrivecart.js"
              ></script>
              <button
                ref="myPurchaseBtn"
                data-thrivecart-account="XXX"
                data-thrivecart-tpl="XXXX"
                data-thrivecart-product="XXXX"
                class="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom "
                style="background-color: #46cea3;display: none"
              >
                Buy Agency
              </button>
            </div>

            <div
              :style="{
                display: seoOptimization ? 'flex' : 'none',
                flexDirection: 'column'
              }"
            >
              <div class="mt-6">
                <label for="before-text-link" class="ml-4">SEO title</label>
                <input
                  id="before-text-link"
                  spellcheck="false"
                  type="before-text-link"
                  placeholder="Enter site title (50-60 characters)"
                  :value="genInfo.seoTitle"
                  @input="genInfo.seoTitle = $event.target.value"
                  class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
                />
              </div>
              <div class="mt-6">
                <label for="linkedText" class="ml-4">Meta description</label>
                <input
                  id="linkedText"
                  spellcheck="false"
                  type="linkedText"
                  placeholder="Enter site description (150-160 characters)"
                  :value="genInfo.metaDescription"
                  @input="genInfo.metaDescription = $event.target.value"
                  class="mt-2 px-4 w-full h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
                />
              </div>
            </div>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              Please support this project and consider our Agency upgrade which
              allows you to white-label unlimited digital business cards and
              brand them as your own with a custom footer link, while optionally
              turning on search engine indexing.
            </p>
          </div>
        </div>

        <div id="step-8" class="mt-16">
          <h2 class="font-extrabold text-2xl">Color Customization</h2>
          <div class="stepC">
            <Colour name="logoBg" label="Header background" :colors="colors" />
            <Colour name="mainBg" label="Body background" :colors="colors" />
            <Colour
              name="buttonBg"
              label="Button background"
              :colors="colors"
            />
            <Colour
              name="cardBg"
              label="Featured Content background"
              :colors="colors"
            />
          </div>
        </div>

        <div id="step-10" class="mt-16">
          <h2 class="font-extrabold text-2xl">Analytics</h2>
          <div class="stepC mt-6">
            <textarea
              id="tracking-code"
              aria-label="tracking-code"
              v-model="genInfo.tracker"
              class="block mt-2 px-4 py-3 w-full bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 resize-none hover:border-gray-600"
              rows="4"
              spellcheck="false"
              placeholder="Paste tracking code here"
            ></textarea>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              Supports services such as Clicky, Matomo, Google Analytics etc.
            </p>
          </div>
        </div>
        <div id="step-11" class="mt-16">
          <h2 class="font-extrabold text-2xl">Hosting</h2>
          <div class="stepC mt-6">
            <label for="font-css" class="ml-4">Hosted card URL</label>
            <input
              spellcheck="false"
              type="text"
              id="font-css"
              v-model="hostedURL"
              class="block mt-2 px-4 py-3 w-full bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 resize-none hover:border-gray-600"
              placeholder="https://yoursite/vcard/username"
            />
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              Only paste your hosting URL if you've already decided where you
              want to host this digital business card. If you haven't decided
              yet, please skip this step.
            </p>
          </div>
        </div>
        <Download
          :downloadCheckList="downloadCheckList"
          :downloadChecked="downloadChecked"
          :downloadPackage="downloadPackage"
        />
        <Help />
      </div>
      <div
        id="preview-container"
        class="relative w-full mt-20 sm:mt-0 hidden md:block"
      >
        <div
          id="preview"
          class="flex flex-col items-center justify-center sm:sticky sm:top-0 md:mx-6 lg:mx-12"
        >
          <div id="device" class="bg-black rounded sm:mt-10">
            <h2 class="text-center py-4 font-extrabold text-gray-200">
              LIVE PREVIEW
            </h2>
            <div id="browserFrame" class="overflow-hidden flex flex-col">
              <div
                id="topBar"
                class="topbar border-r-4 border-l-4 border-black bg-gray-900 z-10"
              >
                <div id="searchField" class="p-2 flex items-center">
                  <input
                    type="text"
                    class="pl-4 h-12 w-full bg-black rounded text-gray-500"
                    aria-label="vCard URL"
                    disabled
                    :value="'yoursite/vcard/' + username + '/'"
                    tabindex="-1"
                  />
                  <div
                    class="w-6 ml-2"
                    v-html="require(`~/assets/icons/ellipsis.svg?include`)"
                  ></div>
                </div>
              </div>
              <Preview
                class="rounded-b-2xl"
                ref="html"
                :username="username"
                :genInfo="genInfo"
                :images="images"
                :featured="featured"
                :colors="colors"
                :primaryActions="primaryActions"
                :secondaryActions="secondaryActions"
                :PreviewMode="PreviewMode"
                :footerCreditCustom="footerCreditCustom"
                :seoOptimization="seoOptimization"
                :downloadVcard="downloadVcard"
                :footerCredit="footerCredit"
                :seoOpti="seoOpti"
                :simplifyCard="simplifyCard"
                :showAlert="showAlert"
                :hasLightBG="hasLightBG"
                :downloadKey="downloadKey"
                :pubKeyIsValid="pubKeyIsValid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
-->

    <transition name="fade">
      <div class="modal" v-if="show">
        <div class="card">
          <div class="card-head">
            <i
              style="cursor: pointer"
              @click="closeModal()"
              class="far fa-times-circle ml-10 mt-10"
            >
            </i>
            <center>
              <img
                class="head-icon"
                src="./../assets/icons/BearIcon_new.jpeg"
              />
            </center>
            <center>
              <div class="font-weight-bold mt-10">Smart vCard</div>
              <div class="font-weight-light text-secondary">by BizViz</div>
            </center>
          </div>
          <div class="card-body">
            <div class="form-group mt-20">
              <!-- <div class="form-control"> -->
              <GoogleLogin
                :params="params"
                :renderParams="renderParams"
                :onSuccess="onSuccess"
                :onFailure="onFailure"
                cookiePolicy="single_host_origin"
                isSignedIn="false"
                >Download With Google</GoogleLogin
              >
            </div>

            <div class="form-group mt-20">
              <facebook-login
                class="facebook_button"
                appId="XXXXXXXXXXXXXXXXXXXX"
                logoutLabel="Download With Facebook"
                loginLabel="Download With Facebook"
                @login="onLogin"
                @logout="onLogout"
                @sdk-loaded="sdkLoaded"
                >Download With Facebook
              </facebook-login>
            </div>

            <div
              class="form-group mt-20"
              style="
                border: 1px solid white;
                background-color: black;
                height: 50px;
              "
            >
              <button
                v-if="!account"
                aria-disabled="false"
                tabindex="0"
                role="button"
                class="css-wnlilk"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 274px;
                  padding-left: 13px;
                "
                @click="SignInMicroSoft"
                target="_blank"
              >
                <svg
                  height="21"
                  viewBox="0 0 21 21"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                  class="css-18c52kg"
                >
                  <title>Microsoft Logo</title>
                  <rect fill="#f25022" height="9" width="9" x="1" y="1"></rect>
                  <rect fill="#00a4ef" height="9" width="9" x="1" y="11"></rect>
                  <rect fill="#7fba00" height="9" width="9" x="11" y="1"></rect>
                  <rect
                    fill="#ffb900"
                    height="9"
                    width="9"
                    x="11"
                    y="11"
                  ></rect>
                </svg>
                <span class="css-78cbo8"
                  ><span style="color: white" class="css-rsd7m7"
                    >Download With Microsoft</span
                  ></span
                >
              </button>

              <button
                v-if="account"
                aria-disabled="false"
                tabindex="0"
                role="button"
                class="css-wnlilk"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 274px;
                  padding-left: 13px;
                "
                @click="SignOutMicroSoft"
                target="_blank"
              >
                <svg
                  height="21"
                  viewBox="0 0 21 21"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                  class="css-18c52kg"
                >
                  <title>Microsoft Logo</title>
                  <rect fill="#f25022" height="9" width="9" x="1" y="1"></rect>
                  <rect fill="#00a4ef" height="9" width="9" x="1" y="11"></rect>
                  <rect fill="#7fba00" height="9" width="9" x="11" y="1"></rect>
                  <rect
                    fill="#ffb900"
                    height="9"
                    width="9"
                    x="11"
                    y="11"
                  ></rect>
                </svg>
                <span class="css-78cbo8"
                  ><span style="color: white" class="css-rsd7m7"
                    >Sign Out From Microsoft</span
                  ></span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <Vcard ref="vCard" :vCard="vCard" />
    <Footer />
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'
import facebookLogin from 'facebook-login-vuejs'
import swal from 'sweetalert2'
window.Swal = swal

import { PublicClientApplication } from '@azure/msal-browser'
import Modal from '@/components/Modal'
import Attachment from '@/components/Attachment'
import Action from '@/components/Action'
import Featured from '@/components/Featured'
import Colour from '@/components/Colour'
import Preview from '@/components/Preview'
import Download from '@/components/Download'
import Help from '@/components/Help'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Cropper from '@/components/Cropper'
import Vcard from '@/components/Vcard'
import JSZip from 'jszip'
import draggable from 'vuedraggable'

import { saveAs } from 'file-saver'
import QRCode from '!!raw-loader!~/static/qrcode.min.js'
import Theme1 from '!!raw-loader!~/assets/styles/T1.min.css'

export default {
  name: 'Modal',
  components: {
    GoogleLogin,
    facebookLogin,
    Cropper,
    Modal,
    Attachment,
    Action,
    Featured,
    Colour,
    Preview,
    Download,
    Help,
    Header,
    Footer,
    Vcard,
    draggable
  },

  head: {
    titleTemplate: '%s - Digital Business Card Generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Create an html digital business card (.vcf file) that you can host for free on your domain.'
      }
    ]
  },
  data() {
    return {
      account: undefined,
      msalConfig: {
        auth: {
          clientId: 'XXXXXXXXXXXXXXXXXX',
          authority: 'XXXXXXXXXXX/common/',
          redirectUri: 'https://www.smartvcard.com/'
        },
        cache: {
          cacheLocation: 'localStorage'
        }
      },
      $msalInstance: {},
      downloadCheckList: [
        {
          label:
            'I did not attach any link or file that will cause any risk to the user',
          checked: false
        },
        {
          label: 'I have verified that all the links are working correctly',
          checked: false
        },
        {
          label: 'I have removed all unused fields and sections',
          checked: false
        }
      ],
      params: {
        client_id: 'XXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com'
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 325,
        height: 50,
        longtitle: true,
        theme: 'dark'
        // color: red
      },
      //for facebook
      isConnected: false,
      FB: undefined,
      //for microsoft
      account: undefined,

      first_name: '',
      last_name: '',
      email_address: '',
      loading: false,
      show: false,
      email: '',
      user_name: '',
      phone: '',
      address: '',
      amount: 27,

      cardOptions: {
        value: {
          postalCode: ''
        }
      },
      images: {
        logo: {
          url: null,
          blob: null,
          ext: null,
          mime: null,
          resized: null
        },
        photo: {
          url: null,
          blob: null,
          ext: null,
          mime: null,
          resized: null
        },
        icon: {
          url: null,
          blob: null,
          ext: null,
          mime: null,
          resized: null
        }
      },
      colors: {
        logoBg: {
          color: `#1F2937`,
          openPalette: false
        },
        mainBg: {
          color: `#F9FAFB`,
          openPalette: false
        },
        buttonBg: {
          color: `#374151`,
          openPalette: false
        },
        cardBg: {
          color: `#E5E7EB`,
          openPalette: false
        }
      },

      genInfo: {
        fname: null,
        lname: null,
        pronouns: null,
        name: null,
        title: null,
        biz: null,
        desc: null,
        key: null,
        fp: null,
        tracker: null,
        fontLink: null,
        fontCss: null,
        pronouns: null,
        addr: null,
        beforeTextLink: null,
        linkedText: null,
        url: null,
        seoTitle: null,
        metaDescription: null
      },
      altHeadShot: null,
      primaryActions: [],
      secondaryActions: [],
      filterPrimary: '',
      filterSecondary: '',
      actions: {
        primaryActions: [
          {
            name: 'call',
            href: 'tel:',
            placeholder: '+1 XXX XXX XXXX',
            value: null,
            label: 'Phone number'
          },
          {
            name: 'Mobile',
            href: 'tel:',
            placeholder: '+1 XXX XXX XXXX',
            value: null,
            label: 'Mobile number'
          },
          {
            name: 'Office',
            href: 'tel:',
            placeholder: '+1 XXX XXX XXXX',
            value: null,
            label: 'Office number'
          },
          {
            name: 'fax',
            href: 'tel:',
            placeholder: '+1 XXX XXX XXXX',
            value: null,
            label: 'Fax Number'
          },
          {
            name: 'Home',
            href: 'tel:',
            placeholder: '+1 XXX XXX XXXX',
            value: null,
            label: 'Home number'
          },
          {
            name: 'SMS',
            href: 'SMS:',
            placeholder: '+1 XXX XXX XXXX',
            value: null,
            label: 'Phone number to send the SMS'
          },
          {
            name: 'whatsApp',
            placeholder: 'https://wa.me/profileID',
            value: null,
            label: 'WhatsApp profile URL'
          },
          {
            name: 'messenger',
            href: 'https://m.me/',
            placeholder: 'username',
            value: null,
            label: 'Facebook Messanger Link'
          },
          {
            name: 'telegram',
            href: 'https://t.me/',
            placeholder: 'username',
            value: null,
            label: 'Telegram profile URL'
          },
          {
            name: 'email',
            href: 'mailto:',
            placeholder: 'info@example.com',
            value: null,
            label: 'Email address'
          },
          {
            name: 'website',
            placeholder: 'https://example.com',
            value: null,
            label: 'Website URL'
          },
          {
            name: 'calendar',
            placeholder: 'https://example.com',
            value: null,
            label: 'Calender'
          },
          {
            name: 'store',
            placeholder: 'https://example.com/storeID',
            value: null,
            label: 'Online Store URL'
          },
          {
            name: 'location',
            placeholder: 'https://goo.gl/maps/location',
            value: null,
            label: 'Map location URL'
          },

          {
            name: 'Matrix',
            icon: 'matrix',
            href: 'https://matrix.to/#/',
            placeholder: '@username:matrix.org',
            value: null,
            label: 'Matrix userID',
            order: 10,
            isURL: 1
          },
          {
            name: 'Skype',
            icon: 'skype',
            href: 'skype:',
            hrefEnd: '?chat',
            placeholder: 'username',
            value: null,
            label: 'Skype username',
            order: 13,
            isURL: 1
          },
          {
            name: 'Line',
            icon: 'line',
            href: 'https://line.me/ti/p/',
            placeholder: 'LINE ID',
            value: null,
            label: 'Line profile ID',
            order: 14,
            isURL: 1
          },
          {
            name: 'Viber',
            icon: 'viber',
            href: 'viber://chat?number=',
            placeholder: 'XX XXXXX XXXXX',
            value: null,
            label: 'Viber mobile number',
            order: 15,
            isURL: 1
          }
        ],
        secondaryActions: [
          {
            name: 'App Store',
            icon: 'appstore',
            placeholder: 'https://apps.apple.com/in/app/appname/id',
            value: null,
            color: 'linear-gradient(#5fc9f8, #147efb)',
            label: 'App Store developer/app URL'
          },
          {
            name: 'ArtStation',
            icon: 'artstation',
            href: 'https://www.artstation.com/',
            placeholder: 'username',
            value: null,
            color: '#171717',
            label: 'ArtStation username'
          },
          {
            name: 'behance',
            href: 'https://behance.net/',
            placeholder: 'username',
            value: null,
            color: '#1769ff',
            label: 'Behance profile URL'
          },
          {
            name: 'Buy me a coffee',
            icon: 'buymeacoffee',
            href: 'https://www.buymeacoffee.com/',
            placeholder: 'username',
            value: null,
            color: '#ffdd00',
            light: 1,
            label: 'Buy me a coffee username'
          },
          {
            name: 'Cash App',
            icon: 'cashapp',
            href: 'https://cash.app/',
            placeholder: '$username',
            value: null,
            color: '#fff',
            light: 1,
            label: 'Cash App username'
          },
          {
            name: 'codeberg',
            href: 'https://codeberg.org/',
            placeholder: 'username',
            value: null,
            color: '#2185d0',
            label: 'Codeberg profile URL'
          },
          {
            name: 'diaspora',
            placeholder: 'https://diaspora.social/username',
            value: null,
            color: '#000000',
            label: 'Diaspora profile URL'
          },
          {
            name: 'discord',
            placeholder: 'https://discord.gg/invitecode',
            value: null,
            color: '#7289da',
            label: 'Discord profile URL'
          },
          {
            name: 'dribbble',
            href: 'https://dribbble.com/',
            placeholder: 'username',
            value: null,
            color: '#ea4c89',
            label: 'Dribbble profile URL'
          },
          {
            name: 'facebook',
            href: 'https://facebook.com/',
            placeholder: 'username or pagename',
            value: null,
            color: '#1877f2',
            label: 'Facebook page URL'
          },
          {
            name: 'friendica',
            placeholder: 'https://friendica.social/username',
            value: null,
            color: '#1d6e9a',
            label: 'Friendica profile URL'
          },
          {
            name: 'funkwhale',
            placeholder: 'https://funkwhale.audio/username',
            value: null,
            color: '#ffffff',
            label: 'Funkwhale profile URL'
          },
          {
            name: 'github',
            href: 'https://github.com/',
            placeholder: 'username',
            value: null,
            color: '#333',
            label: 'Github profile URL'
          },
          {
            name: 'gitlab',
            href: 'https://gitlab.com/',
            placeholder: 'username',
            value: null,
            color: '#554488 ',
            label: 'Gitlab profile URL'
          },
          {
            name: 'instagram',
            href: 'https://instagram.com/',
            placeholder: 'username',
            value: null,
            color: '#405de6',
            // color: '#ffffff',
            label: 'Instagram profile URL'
          },
          {
            name: 'linkedin',
            href: 'https://linkedin.com/',
            placeholder: 'in/username or company/companyname',
            value: null,
            color: '#0077b5',
            label: 'Linkedin profile URL'
          },
          {
            name: 'mastodon',
            placeholder: 'https://mastodon.social/@username',
            value: null,
            color: '#2b90d9',
            label: 'Mastodon profile URL'
          },
          {
            name: 'medium',
            placeholder: 'https://medium.com/publication_name',
            value: null,
            color: '#000000',
            label: 'Medium publication'
          },
          {
            name: 'open-collective',
            href: 'https://opencollective.com/',
            placeholder: 'projectname',
            value: null,
            color: '#fff',
            label: 'Open Collective URL'
          },
          {
            name: 'patreon',
            href: 'https://patreon.com/',
            placeholder: 'username',
            value: null,
            color: '#FF424D',
            label: 'Patreon URL'
          },
          {
            name: 'paypal',
            href: 'https://paypal.me/',
            placeholder: 'username',
            value: null,
            color: '#003087',
            label: 'PayPal.me URL'
          },
          {
            name: 'peertube',
            placeholder: 'https://peertube.video/channelname',
            value: null,
            color: '#ffffff',
            label: 'Peertube channel URL'
          },
          {
            name: 'pinterest',
            href: 'https://pinterest.com/',
            placeholder: 'username',
            value: null,
            color: '#bd081c',
            label: 'Pinterest profile URL'
          },
          {
            name: 'pixelfed',
            placeholder: 'https://pixelfed.social/username',
            value: null,
            color: '#8d59a8',
            label: 'Pixelfed profile URL'
          },
          {
            name: 'Play Store',
            icon: 'playstore',
            placeholder: 'https://play.google.com/store/apps/details?id=',
            value: null,
            color: '#fff',
            light: 1,
            label: 'Play Store developer/app URL'
          },
          {
            name: 'quora',
            href: 'https://quora.com/',
            placeholder: 'username',
            value: null,
            color: '#a82400',
            label: 'Quora profile URL'
          },
          {
            name: 'reddit',
            href: 'https://reddit.com/',
            placeholder: 'username',
            value: null,
            color: '#ff5700',
            label: 'Reddit profile URL'
          },
          {
            name: 'Siilo',
            icon: 'siilo',
            href: 'https://app.siilo.com/qr/',
            placeholder: 'userid',
            value: null,
            color: '#17233b',
            label: 'Siilo userid'
          },
          {
            name: 'snapchat',
            placeholder: 'https://snapchat.com/username',
            value: null,
            color: '#fffc00',
            label: 'Snapchat profile URL'
          },
          {
            name: 'soundcloud',
            placeholder: 'https://soundcloud.com/username',
            value: null,
            color: '#ff3300',
            label: 'Soundcloud profile URL'
          },
          {
            name: 'spotify',
            placeholder: 'https://spotify.com/username',
            value: null,
            color: '#1ed760',
            label: 'Spotify profile URL'
          },
          {
            name: 'TikTok',
            icon: 'tiktok',
            href: 'https://tiktok.com/',
            placeholder: 'username',
            value: null,
            color: '#fff',
            label: 'TikTok profile URL'
          },
          {
            name: 'tumblr',
            value: null,
            color: '#2c4762',
            href: 'https://',
            hrefEnd: '.tumblr.com/',
            placeholder: 'username',
            label: 'Tumblr blog URL'
          },
          {
            name: 'twitch',
            href: 'https://twitch.tv/',
            placeholder: 'username',
            value: null,
            color: '#9146ff',
            label: 'Twitch profile URL'
          },
          {
            name: 'twitter',
            href: 'https://twitter.com/',
            placeholder: 'username',
            value: null,
            color: '#1da1f2',
            label: 'Twitter profile URL'
          },
          {
            name: 'vimeo',
            href: 'https://vimeo.com/',
            placeholder: 'channelname',
            value: null,
            color: '#1ab7ea',
            label: 'Vimeo channel URL'
          },
          {
            name: 'vk',
            href: 'https://vk.com/',
            placeholder: 'pagename',
            value: null,
            color: '#4a76a8',
            label: 'VK page URL'
          },
          {
            name: 'yelp',
            href: 'https://yelp.com/',
            placeholder: 'bizname',
            value: null,
            color: '#fff',
            label: 'Yelp page URL'
          },
          {
            name: 'youtube',
            href: 'https://youtube.com/',
            placeholder: 'channel name or ID',
            value: null,
            color: '#ff0000',
            label: 'Youtube channel URL'
          }
        ]
      },
      featured: [
        {
          title: '',
          content: []
        }
      ],
      hostedURL: null,
      footerCredit: true,
      footerCreditCustom: false,
      customFavicon: false,
      seoOpti: true,
      seoOptimization: false,
      simplifyCard: false,
      PreviewMode: true,
      content: null,
      inView: false,
      showPreview: false,
      scrollPos: null,
      opening: false
    }
  },
  computed: {
    isComplete() {
      return (
        this.user_name != '' &&
        this.email != '' &&
        this.phone != '' &&
        this.address != ''
      )
    },
    getFullname() {
      let fn = this.genInfo.fname
      let ln = this.genInfo.lname
      return (fn + ln).length ? `${fn ? fn : ''}${ln ? ' ' + ln : ''}` : null
    },
    pubKeyIsValid() {
      if (this.genInfo.key) {
        if (!this.genInfo.key.match(/^(-----BEGIN PGP PUBLIC KEY BLOCK-----)/))
          return false

        if (!this.genInfo.key.match(/(-----END PGP PUBLIC KEY BLOCK-----)$/))
          return false

        return true
      } else return false
    },
    fingerprintIsValid() {
      return this.genInfo.fp && this.genInfo.fp.match(/^[a-zA-Z0-9]{40}$/)
    },
    downloadChecked() {
      return this.downloadCheckList.filter(e => e.checked).length == 3
    },
    username() {
      return this.getFullname
        ? this.getFullname.toLowerCase().replace(/\W+/g, '')
        : 'username'
    },
    orderedPrimaryActions() {
      return this.actions.primaryActions.sort((a, b) =>
        a.order > b.order ? 1 : a.order < b.order ? -1 : 0
      )
    },
    orderedSecondaryActions() {
      return this.actions.secondaryActions.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    },
    filteredPrimaryActions() {
      return this.orderedPrimaryActions.filter(e =>
        e.name.toLowerCase().includes(this.filterPrimary.toLowerCase())
      )
    },
    filteredSecondaryActions() {
      return this.orderedSecondaryActions.filter(e =>
        e.name.toLowerCase().includes(this.filterSecondary.toLowerCase())
      )
    },

    vCard() {
      //zia 2
      let lastEncodedPart
      let headShot = this.images.photo.url || 'ABC;a,DEF'
      let str = headShot
      if (str !== '' && this.images.photo.url !== null) {
        let pieces = str.split(/[\s;]+/)
        let res = pieces[pieces.length - 1]
        let aotherpieces = res.split(/[\s,]+/)
        lastEncodedPart = aotherpieces[pieces.length - 1]
      }
      console.log(lastEncodedPart)
      console.log(this.altHeadShot)
      let phoneNumbers = this.primaryActions
        .map(e => (e.name == 'call' ? e.value : null))
        .filter(e => e)

      let mobileNumber = this.primaryActions
        .map(e => (e.name == 'Mobile' ? e.value : null))
        .filter(e => e)

      let FAX = this.primaryActions
        .map(e => (e.name == 'fax' ? e.value : null))
        .filter(e => e)

      let HOME = this.primaryActions
        .map(e => (e.name == 'Home' ? e.value : null))
        .filter(e => e)

      let WHATSAPP = this.primaryActions
        .map(e => (e.name == 'whatsApp' ? e.value : null))
        .filter(e => e)[0]

      let WORK = this.primaryActions
        .map(e => (e.name == 'Office' ? e.value : null))
        .filter(e => e)

      let email = this.primaryActions
        .map(e => (e.name == 'email' ? e.value : null))
        .filter(e => e)[0]

      let Location = this.primaryActions
        .map(e => (e.name == 'location' ? e.value : null))
        .filter(e => e)

      const getNumber = type => {
        let no = this.primaryActions
          .map(e => (e.name == type ? e.value : null))
          .filter(e => e)[0]
        return no ? no.replace(/\s/g, '') : null
      }

      let website = this.primaryActions
        .map(e => (e.name == 'website' ? e.value : null))
        .filter(e => e)[0]
      // let actions = [
      //   ...this.primaryActions,
      //   ...this.secondaryActions.map((e) => {
      //     return { ...e, isURL: 1 }
      //   }),
      // ]

      //  e.name.charAt(0).toUpperCase() + e.name.slice(1)

      let actions = [
        ...this.primaryActions,
        ...this.secondaryActions.map(e => {
          return { ...e, isURL: 1 }
        })
      ]
      let urls = actions
        .map(e => {
          if (e.isURL && e.value) {
            return {
              title: e.name.charAt(0).toUpperCase() + e.name.slice(1),
              url:
                (e.href ? e.href : '') + e.value + (e.hrefEnd ? e.hrefEnd : '')
            }
          }
          return false
        })
        .filter(e => e)

      // let urls = actions
      //   .map((e) => {
      //     if (e.isURL && e.value) {
      //       return {
      //         title: e.name,
      //         url:
      //           (e.href ? e.href : '') + e.value + (e.hrefEnd ? e.hrefEnd : ''),
      //       }
      //     }
      //     return false
      //   })
      //   .filter((e) => e)

      let note = this.genInfo.desc
        ? this.genInfo.desc.replace(/[\r\n]+/gm, '')
        : null
      let key = this.pubKeyIsValid ? window.btoa(this.genInfo.key) : null
      let randomNumber = Math.floor(100000000 + Math.random() * 900000)

      return {
        fn: this.genInfo.fname,
        ln: this.genInfo.lname,
        title: this.genInfo.title,
        org: this.genInfo.biz,
        cell: getNumber('Mobile'),
        work: getNumber('Office'),
        home: getNumber('Home'),
        sms: getNumber('SMS'),
        signal: getNumber('Signal'),
        website: website,
        email,
        hostedURL: this.hostedURL,
        // website,
        urls,
        key,
        FN: this.genInfo.name,
        TITLE: this.genInfo.title,
        ORG: this.genInfo.biz,
        COMPANY: this.genInfo.biz,
        TEL1: phoneNumbers[0],
        TEL2: phoneNumbers[1],
        FAX: getNumber('fax'),
        MOB: mobileNumber[0],
        HOME: HOME[0],
        WORK: WORK[0],
        EMAIL: email,
        URL: website,
        KEY: this.genInfo.fp,
        LOCATION: Location[0],
        UID: `SMART vCARD-${randomNumber}`,
        PHOTO:
          lastEncodedPart !== undefined ? lastEncodedPart : this.altHeadShot,
        NOTE: note,
        WHATSAPP: WHATSAPP,
        ADDRESS: this.genInfo.addr
      }
    }
  },
  watch: {
    simplifyCard: {
      async handler(newValue, oldValue) {
        if (newValue === true) {
          this.simplifyCard = false
          Swal.fire({
            title: 'Error!',
            text: `Use Your Thrive Cart Here`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      },
      deep: true
    },
    footerCreditCustom: {
      async handler(newValue, oldValue) {
        // Zia new work
        // console.log(newValue)
        if (newValue === true) {
          this.footerCreditCustom = false
          Swal.fire({
            title: 'Error!',
            text: `Use Your Thrive Cart Here`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      },
      deep: true
    },
    seoOptimization: {
      async handler(newValue, oldValue) {
        if (newValue === true) {
          this.seoOptimization = false
          Swal.fire({
            title: 'Error!',
            text: `Use Your Thrive Cart Here`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      },
      deep: true
    }
  },
  async mounted() {
    this.$msalInstance = new PublicClientApplication(this.msalConfig)
    const accounts = this.$msalInstance.getAllAccounts()
    if (accounts.length == 0) {
      return
    }
    this.account = accounts[0]
  },
  methods: {
    async onSuccess(googleUser) {
      await googleUser.getBasicProfile()

      this.closeModal()

      this.allowDownload()
    },

    async onFailure(err) {
      console.log('error')
      console.log(err)
    },

    async fb() {},
    //facebook
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
    },
    //facebook
    onLogin() {
      this.isConnected = true
    },
    //facebook
    onLogout() {
      this.isConnected = false
    },
    //microsoft
    async created() {
      this.$msalInstance = new PublicClientApplication(this.msalConfig)
    },
    async SignInMicroSoft() {
      await this.$msalInstance
        .loginPopup({})
        .then(() => {
          this.closeModal()

          this.allowDownload()
        })

        .catch(error => {
          console.error(`error during authentication: ${error}`)
        })
    },

    async SignOutMicroSoft() {
      await this.$msalInstance
        .logout({})
        .then(() => {})
        .catch(error => {
          console.error(error)
        })
    },

    closeModal() {
      this.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    openModal() {
      this.show = true
      document.querySelector('body').classList.add('overflow-hidden')
    },
    togglePreview() {
      this.opening = true
      let c = this.$refs.container
      if (this.showPreview) {
        c.classList.remove('overflow-y-hidden', 'h-screen')
        window.scrollTo(0, this.scrollPos)
        this.opening = false
      } else {
        this.scrollPos = window.scrollY
        setTimeout(() => {
          c.classList.add('overflow-y-hidden', 'h-screen')
          this.opening = false
        }, 400)
      }
      this.showPreview = !this.showPreview
    },
    checkView() {
      let e = this.$refs.create
      if (e) {
        let top = e.getBoundingClientRect().top
        this.inView = this.showPreview ? true : top < 0
      }
    },
    clearContent() {
      this.content = null
    },

    create() {
      this.$refs.create.scrollIntoView({ behavior: 'smooth' })
    },
    getTitle(e) {
      return e
        .toLowerCase()
        .split(' ')
        .join('_')
    },
    addFeature() {
      this.featured.push({
        title: '',
        content: []
      })
    },
    hasLightBG(e) {
      let hex = this.colors[e].color
      hex = hex.slice(1)
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      }
      let r = parseInt(hex.slice(0, 2), 16)
      let g = parseInt(hex.slice(2, 4), 16)
      let b = parseInt(hex.slice(4, 6), 16)
      const brightness = Math.round(
        (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
      )
      return brightness > 125 ? true : false
    },
    showAlert(content) {
      this.content = content
    },
    addAction(type, name) {
      // this[type].push(this.actions[type][index])
      // this.actions[type].splice(index, 1)

      let index = this.actions[type].findIndex(e => e.name === name)
      this[type].push(this.actions[type][index])
      this.actions[type].splice(index, 1)
      this.clearFilterActions()
    },
    clearFilterActions() {
      this.filterPrimary = this.filterSecondary = ''
    },
    filteredAction(filterType, actionType) {
      if (this[filterType].length)
        this.addAction(actionType, this[filterType][0].name)
      this.clearFilterActions()
    },
    removeAction(type, index) {
      this.actions[type].unshift(this[type][index])
      this[type].splice(index, 1)
    },
    async downloadVcard() {
      let blob = new Blob([this.$refs.vCard.$refs.vCard.innerText], {
        type: 'text/plain'
      })
      saveAs(window.URL.createObjectURL(blob), `${this.username}.vcf`)
    },
    downloadKey() {
      let blob = new Blob([this.genInfo.key], {
        type: 'text/plain'
      })
      saveAs(
        window.URL.createObjectURL(blob),
        `${this.genInfo.name}'s public key.asc`
      )
    },
    async resizeImage(type, mime, index1, index2) {
      let vm = this
      let reader = new FileReader()
      let file
      if (index2 >= 0) {
        if (type == 'image') {
          file = await this.featured[index1].content[index2].file
        } else if (type == 'music') {
          file = await this.featured[index1].content[index2].cover
        } else if (type == 'product') {
          file = await this.featured[index1].content[index2].image.file
        }
      } else {
        file = await this.images[type].blob
      }
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      let img = document.createElement('img')
      let maxWidth, maxHeight
      reader.onload = e => {
        img.src = e.target.result
        img.onload = () => {
          if (type == 'photo') {
            canvas.width = canvas.height = 320
          } else {
            if (type == 'logo') {
              maxWidth = 1056
              maxHeight = 288
            } else if (type == 'icon') {
              maxWidth = 16
              maxHeight = 16
            } else {
              maxWidth = maxHeight = 1296
            }
            let width = img.width
            let height = img.height

            if (width > maxWidth) {
              height *= maxWidth / width
              width = maxWidth
            }
            if (height > maxHeight) {
              width *= maxHeight / height
              height = maxHeight
            }
            canvas.width = width
            canvas.height = height
          }
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          canvas.toBlob(
            blob => {
              let image = new File([blob], type, {
                type: mime
              })
              if (index2 >= 0) {
                if (type == 'image') {
                  vm.featured[index1].content[index2].file = image
                } else if (type == 'music') {
                  vm.featured[index1].content[index2].cover = image
                } else if (type == 'product') {
                  vm.featured[index1].content[index2].image.file = image
                }
              } else {
                vm.images[type].resized = image
              }
            },
            mime,
            0.8
          )
        }
      }
      reader.readAsDataURL(file)
    },
    getTrackingCode() {
      let regex = /<script[^<]*<\/script>/g
      let tracker = this.genInfo.tracker
      if (regex.test(tracker)) {
        let scripts = tracker.match(regex)
        let temp = document.createElement('div')
        temp.innerHTML = tracker
        return scripts.length && temp
      }
      return false
    },
    openPopUpforPayMent() {
      let isPresent = localStorage.getItem('license_key')
      if (isPresent !== null) {
        this.allowDownload()
        return
      }
      !localStorage.getItem('user')
        ? this.openModal()
        : this.downloadByLocalStorageData()
    },
    async downloadPackage() {
      await this.openPopUpforPayMent()
    },
    async allowDownload() {
      if (this.downloadChecked) {
        this.PreviewMode = false
        setTimeout(() => {
          let el = new DOMParser().parseFromString(
            this.$refs.html.$refs.html.outerHTML,
            'text/html'
          )
          // Inject stylesheets
          let styleLink = document.createElement('link')
          styleLink.rel = 'stylesheet'
          styleLink.href = './style.min.css'
          el.querySelector('head').appendChild(styleLink)
          // Inject qrcode script
          let qrcode = document.createElement('script')
          qrcode.src = './qrcode.min.js'
          el.querySelector('body').appendChild(qrcode)
          // Inject general script
          let modals = document.createElement('script')
          modals.innerText =
            'let m=document.getElementById("modal"),c=document.getElementById("close"),ki=document.getElementById("keyInfo"),cv=document.getElementById("copyView"),curl=document.getElementById("copyURL"),qrv=document.getElementById("qrView"),qr=document.getElementById("qr"),s=document.getElementById("share"),sqr=document.getElementById("showQR"),sk=document.getElementById("showKey");function tC(e){"2rem"==e.style.top?(e.style.visibility="visible",e.style.top="0px",e.style.opacity=1):(e.style.top="2rem",e.style.opacity=0,setTimeout(()=>{e.style.visibility="hidden"},200))}function dN(e){e.style.display="none"}window.addEventListener("load",()=>{document.querySelector("#topActions").style.display="flex",qr.innerHTML=new QRCode({content:window.location.href,container:"svg-viewbox",join:!0,ecl:"L",padding:0}).svg()}),navigator.canShare?s.addEventListener("click",()=>{navigator.share({title:document.title,text:"You can view my Digital Business Card here:",url:window.location.href})}):s.addEventListener("click",()=>{tC(m),cv.style.display="flex",dN(qrv),ki&&dN(ki)}),sqr.addEventListener("click",()=>{tC(m),qrv.style.display="block",dN(cv),ki&&dN(ki)}),sk&&sk.addEventListener("click",()=>{tC(m),ki&&(ki.style.display="flex"),dN(cv),dN(qrv)}),c.addEventListener("click",()=>tC(m)),curl.addEventListener("click",async()=>{let e=curl.querySelectorAll(".action")[1];await navigator.clipboard.writeText(window.location.href).then(t=>{e.innerText="Copied",setTimeout(()=>{e.innerText="Copy URL"},1e3)})});'
          el.querySelector('body').appendChild(modals)
          // Inject media script
          let mediaHandler = document.createElement('script')
          mediaHandler.innerText =
            'let pC=document.querySelectorAll(".pCtrl"),pP=document.querySelectorAll(".playPause"),srcs=document.querySelectorAll(".source");srcs.forEach(e=>{e.style.pointerEvents="none",e.removeAttribute("controls")}),pC.forEach((e,l)=>{e.style.display="flex";let r=e.querySelector(".currentTime"),s=e.querySelector(".seekBar"),t=e.querySelector(".playPause"),a=t.querySelector(".play"),c=t.querySelector(".pause");srcs[l].addEventListener("timeupdate",()=>{let e=srcs[l].currentTime,t=100/srcs[l].duration*e;s.value=t,100==t&&(s.value=0,a.style.display="block",c.style.display="none");let o=Math.floor(e/60),y=Math.floor(e%60);o.toString().length<2&&(o="0"+o),y.toString().length<2&&(y="0"+y),r.value=o+":"+y}),s.addEventListener("change",()=>{srcs[l].currentTime=srcs[l].duration*(parseInt(s.value)/100)}),t.addEventListener("click",()=>{srcs[l].paused?(srcs.forEach((e,r)=>{l!=r&&(e.paused||e.pause())}),pP.forEach((e,l)=>{let r=e.querySelector(".play"),s=e.querySelector(".pause");r.style.display="block",s.style.display="none"}),srcs[l].play(),a.style.display="none",c.style.display="block"):(srcs[l].pause(),c.style.display="none",a.style.display="block")})});'
          if (this.featured.length)
            el.querySelector('body').appendChild(mediaHandler)
          // Inject tracking scripts
          let tracker = this.getTrackingCode()
          while (tracker.firstChild) el.head.appendChild(tracker.firstChild)
          // Create blobs
          let html = new Blob(
            [`<!DOCTYPE html>${el.documentElement.outerHTML}`],
            {
              type: 'text/html'
            }
          )
          let css = new Blob([Theme1], {
            type: 'text/css'
          })
          let vCard = new Blob([this.$refs.vCard.$refs.vCard.innerText], {
            type: 'text/plain'
          })
          let guide = new Blob(
            [
              '<html><head><meta http-equiv="refresh" content="0; url=https://smartvcard.com/hosting-guide" /></head></html>'
            ],
            {
              type: 'text/html'
            }
          )
          let qrScript = new Blob([QRCode], {
            type: 'application/javascript'
          })
          // Prepare files
          let username = this.username
          let zip = new JSZip()
          zip.folder(username).file('index.html', html)
          zip.folder(username).file('style.min.css', css)
          zip.folder(username).file('qrcode.min.js', qrScript)
          zip.file('Hosting-Guide.html', guide)
          // Image attachments
          for (const key in this.images) {
            if (this.images[key].url) {
              zip
                .folder(username)
                .file(
                  `${key}.${this.images[key].ext}`,
                  this.images[key].resized
                )
            }
          }
          // Featured content
          let hasFeaturedContent = this.featured.filter(e => e.content.length)
            .length
          if (hasFeaturedContent) {
            this.featured.forEach(item => {
              item.content.forEach(item => {
                if (item.contentType == 'media') {
                  zip
                    .folder(username)
                    .folder('media')
                    .file(`${this.getTitle(item.title)}.${item.ext}`, item.file)
                  if (item.type.match(/music|document/gi)) {
                    if (!item.info) {
                      zip
                        .folder(username)
                        .folder('media')
                        .file(
                          `${this.getTitle(item.title)}.${item.coverExt}`,
                          item.cover
                        )
                    }
                  }
                } else if (item.contentType == 'product' && item.image) {
                  zip
                    .folder(username)
                    .folder('media')
                    .file(
                      `${this.getTitle(item.image.title)}.${item.image.ext}`,
                      item.image.file
                    )
                }
              })
            })
          }
          //  Public key
          let name = this.getFullname
          if (this.pubKeyIsValid) {
            zip
              .folder(username)
              .file(`${name}'s public key.asc`, this.genInfo.key)
          }
          // VCARD
          zip.folder(username).file(`${username}.vcf`, vCard)
          // Final ZIP file
          zip
            .generateAsync({
              type: 'blob'
            })
            .then(function(zip) {
              saveAs(zip, `${name}'s Digital Business Card.zip`)
              window.open('/next-steps', '_blank')
            })
          this.PreviewMode = true
        }, 250)
        // window.location.replace("/hosting-upgrade/")
      }
    }
  }
}
</script>

<style lang="scss">
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    width: 25%;
    height: 400px;
    min-width: 300px;
    min-height: 350px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #ccc;
    margin-top: 40px;
    background-color: white;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#card-element {
  border-radius: 4px 4px 0 0;
  padding: 12px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  height: 44px;
  width: 100%;
  background: white;
}

.CardField CardField--ltr {
  background-color: white !important;
}

.card {
  width: 25%;
  height: 515px;
  height: 376px;
  min-width: 370px;
  max-width: 370px !important;
  min-height: 350px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px #ccc;
  margin-top: 40px;
  background-color: white !important;
}

.card-head {
  width: 100%;
  height: 20%;
  min-height: 100px;
  border-radius: 10px 10px 0px 0px;
  background-color: #e4eaea;
}

.card-head .head-icon {
  width: 70px;
  margin-top: -54px !important;
  border-radius: 50%;
}

.card-body {
  width: 100%;
  height: 82%;
  min-height: 250px;
  text-align: center;
  padding: 20px;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control {
  display: block;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 30px;
  padding-right: 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.font-weight-bold {
  font-size: 20px;
  font-weight: 600;
}

.font-weight-light {
  font-size: 12px;
}

.text-secondary {
  color: #787878;
}

.mt-10 {
  margin-top: 2px;
}

.ml-10 {
  margin-left: 10px;
}

.mt-20 {
  margin-top: 20px;
}

.position-absolute {
  position: absolute;
}

.btn {
  width: 100%;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.text-center {
  width: 100%;
  text-align: center;
}

#myBtn:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
.abcRioButton {
  width: 328px !important;
}

.abcRioButtonContents span {
  visibility: hidden;
}

.abcRioButtonContents ::before {
  content: 'Download With Google';
  visibility: visible !important;
  padding-left: 40px;
}

.abcRioButtonContents:last-child {
  visibility: hidden;
}

.facebook_button button[data-v-0af1f3c3] {
  position: relative;
  padding: 0 15px 0px;
  border: none;
  line-height: 34px;
  font-size: 16px;
  color: #fff;
  min-width: 323px;
  height: 48px;
  background-image: linear-gradient(#4c69ba, #3b55a0);
}

img[data-v-0af1f3c3] {
  content: url('./../assets/icons/facebook_logo_social.png');
  position: absolute;
  top: 9px !important;
  left: 10px;
  width: 30px;
}
.spinner[data-v-0af1f3c3] {
  content: url('./../assets/icons/facebook_logo_social.png');
  width: 38px;
  top: 4px;
  /* height: 90%; */
  /* border-radius: 50%; */
  /* border: 5px solid #f3f3f3; */
  /* border-top: 5px solid #3498db; */
  -webkit-animation: none !important;
  animation: none !important;
  position: absolute;
  left: 5px;
}

.facebook_button button[data-v-0af1f3c3] {
  position: relative;
  border: none;
  padding-left: 58px;
  line-height: 34px;
  font-size: 16px;
  color: #fff;
  min-width: 327px;
  height: 48px;
  background-image: linear-gradient(#4c69ba, #3b55a0);
}
</style>
