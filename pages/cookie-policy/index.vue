<template>
  <div
    class="container relative bg-gray-900 mx-auto text-gray-100"
    style="max-width: 960px"
  >
    <div class="px-4">
      <div class="flex items-start justify-between pt-8">
        <NuxtLink to="/">
          <div
            class="logo w-24"
            style="width: 8rem !important; margin-top: -25px"
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
          Cookie Policy
        </h1>
        <br />
        <h2 class="font-extrabold text-2xl">Cookie Policy</h2>
        <br />
        <p>
          We use cookies to help improve your experience of our website at
          <u
            ><a href="https://www.smartvcard.com/"
              >https://www.smartvcard.com/</a
            ></u
          >. This cookie policy is part of BizViz&#39;s privacy policy. It
          covers the use of cookies between your device and our site.
        </p>
        <br />
        <p>
          We also provide basic information on third-party services we may use,
          who may also use cookies as part of their service. This policy does
          not cover their cookies.
        </p>
        <br />
        <p>
          If you don’t wish to accept cookies from us, you should instruct your
          browser to refuse cookies from
          <u
            ><a href="https://www.smartvcard.com/"
              >https://www.smartvcard.com/</a
            ></u
          >. In such a case, we may be unable to provide you with some of your
          desired content and services.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">What is a cookie?</h3>
        <br />
        <p>
          A cookie is a small piece of data that a website stores on your device
          when you visit. It typically contains information about the website
          itself, a unique identifier that allows the site to recognize your web
          browser when you return, additional data that serves the cookie’s
          purpose, and the lifespan of the cookie itself.
        </p>
        <br />
        <p>
          Cookies are used to enable certain features (e.g. logging in), track
          site usage (e.g. analytics), store your user settings (e.g. time zone,
          notification preferences), and to personalize your content (e.g.
          advertising, language).
        </p>
        <br />
        <p>
          Cookies set by the website you are visiting are usually referred to as
          first-party cookies. They typically only track your activity on that
          particular site.
        </p>
        <br />
        <p>
          Cookies set by other sites and companies (i.e. third parties) are
          called third-party cookies They can be used to track you on other
          websites that use the same third-party service.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">
          Types of cookies and how we use them
        </h3>
        <br />
        <h4 class="font-extrabold text-2xl">Essential cookies</h4>
        <br />
        <p>
          Essential cookies are crucial to your experience of a website,
          enabling core features like user logins, account management, shopping
          carts, and payment processing.
        </p>
        <br />
        <p>
          We use essential cookies to enable certain functions on our website.
        </p>
        <br />
        <h4 class="font-extrabold text-2xl">Performance cookies</h4>
        <br />
        <p>
          Performance cookies track how you use a website during your visit.
          Typically, this information is anonymous and aggregated, with
          information tracked across all site users. They help companies
          understand visitor usage patterns, identify and diagnose problems or
          errors their users may encounter, and make better strategic decisions
          in improving their audience’s overall website experience. These
          cookies may be set by the website you’re visiting (first-party) or by
          third-party services. They do not collect personal information about
          you.
        </p>
        <br />
        <p>We use performance cookies on our site.</p>
        <br />
        <h4 class="font-extrabold text-2xl">Functionality cookies</h4>
        <br />
        <p>
          Functionality cookies are used to collect information about your
          device and any settings you may configure on the website you’re
          visiting (like language and time zone settings). With this
          information, websites can provide you with customized, enhanced, or
          optimized content and services. These cookies may be set by the
          website you’re visiting (first-party) or by third-party services.
        </p>
        <br />
        <p>We use functionality cookies for selected features on our site.</p>
        <br />
        <h4 class="font-extrabold text-2xl">Targeting/advertising cookies</h4>
        <br />
        <p>
          Targeting/advertising cookies help determine what promotional content
          is most relevant and appropriate to you and your interests. Websites
          may use them to deliver targeted advertising or limit the number of
          times you see an advertisement. This helps companies improve the
          effectiveness of their campaigns and the quality of content presented
          to you. These cookies may be set by the website you’re visiting
          (first-party) or by third-party services. Targeting/advertising
          cookies set by third-parties may be used to track you on other
          websites that use the same third-party service.
        </p>
        <br />
        <p>We use targeting/advertising cookies on our site.</p>
        <br />
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
    titleTemplate: 'Cookie Policy  - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Click here to read the privacy policy for SMART vCARD'
      }
    ]
  }
}
</script>
