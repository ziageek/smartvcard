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
          Terms of Service
        </h1>
        <br />
        <h2 class="font-extrabold text-2xl">Terms of Service</h2>
        <br />
        <p>
          These Terms of Service govern your use of the website located at
          <u
            ><a href="https://www.smartvcard.com/"
              >https://www.smartvcard.com/</a
            ></u
          >
          and any related services provided by BizViz.
        </p>
        <br />
        <p>
          By accessing
          <u
            ><a href="https://www.smartvcard.com/"
              >https://www.smartvcard.com/</a
            ></u
          >, you agree to abide by these Terms of Service and to comply with all
          applicable laws and regulations. If you do not agree with these Terms
          of Service, you are prohibited from using or accessing this website or
          using any other services provided by BizViz.
        </p>
        <br />
        <p>
          We, BizViz, reserve the right to review and amend any of these Terms
          of Service at our sole discretion. Upon doing so, we will update this
          page. Any changes to these Terms of Service will take effect
          immediately from the date of publication.
        </p>
        <br />
        <p>These Terms of Service were last updated on 25 July 2021.</p>
        <br />
        <h3 class="font-extrabold text-2xl">Limitations of Use</h3>
        <br />
        <p>
          By using this website, you warrant on behalf of yourself, your users,
          and other parties you represent that you will not:
        </p>
        <br />
        <ol style="list-style: numbered inside">
          <li style="padding-bottom: 10px">
            modify, copy, prepare derivative works of, decompile, or reverse
            engineer any materials and software contained on this website;
          </li>
          <li style="padding-bottom: 10px">
            remove any copyright or other proprietary notations from any
            materials and software on this website;
          </li>
          <li style="padding-bottom: 10px">
            transfer the materials to another person or “mirror” the materials
            on any other server;
          </li>
          <li style="padding-bottom: 10px">
            knowingly or negligently use this website or any of its associated
            services in a way that abuses or disrupts our networks or any other
            service BizViz provides;
          </li>
          <li style="padding-bottom: 10px">
            use this website or its associated services to transmit or publish
            any harassing, indecent, obscene, fraudulent, or unlawful material;
          </li>
          <li style="padding-bottom: 10px">
            use this website or its associated services in violation of any
            applicable laws or regulations;
          </li>
          <li style="padding-bottom: 10px">
            use this website in conjunction with sending unauthorized
            advertising or spam;
          </li>
          <li style="padding-bottom: 10px">
            harvest, collect, or gather user data without the user’s consent; or
          </li>
          <li style="padding-bottom: 10px">
            use this website or its associated services in such a way that may
            infringe the privacy, intellectual property rights, or other rights
            of third parties.
          </li>
        </ol>
        <br />
        <h3 class="font-extrabold text-2xl">Intellectual Property</h3>
        <br />
        <p>
          The intellectual property in the materials contained in this website
          are owned by or licensed to BizViz and are protected by applicable
          copyright and trademark law. We grant our users permission to download
          one copy of the materials for personal, non-commercial transitory use.
        </p>
        <br />
        <p>
          This constitutes the grant of a license, not a transfer of title. This
          license shall automatically terminate if you violate any of these
          restrictions or the Terms of Service, and may be terminated by BizViz
          at any time.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">User-Generated Content</h3>
        <br />
        <p>
          You retain your intellectual property ownership rights over content
          you submit to us for publication on our website. We will never claim
          ownership of your content, but we do require a license from you in
          order to use it.
        </p>
        <br />
        <p>
          When you use our website or its associated services to post, upload,
          share, or otherwise transmit content covered by intellectual property
          rights, you grant to us a non-exclusive, royalty-free, transferable,
          sub-licensable, worldwide license to use, distribute, modify, run,
          copy, publicly display, translate, or otherwise create derivative
          works of your content in a manner that is consistent with your privacy
          preferences and our Privacy Policy.
        </p>
        <br />
        <p>
          The license you grant us can be terminated at any time by deleting
          your content. However, to the extent that we (or our partners) have
          used your content in connection with commercial or sponsored content,
          the license will continue until the relevant commercial or post has
          been discontinued by us.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">Liability</h3>
        <br />
        <p>
          Our website and the materials on our website are provided on an 'as
          is' basis. To the extent permitted by law, BizViz makes no warranties,
          expressed or implied, and hereby disclaims and negates all other
          warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property, or other violation of
          rights.
        </p>
        <br />
        <p>
          In no event shall BizViz or its suppliers be liable for any
          consequential loss suffered or incurred by you or any third party
          arising from the use or inability to use this website or the materials
          on this website, even if BizViz or an authorized representative has
          been notified, orally or in writing, of the possibility of such
          damage.
        </p>
        <br />
        <p>
          In the context of this agreement, &ldquo;consequential loss&rdquo;
          includes any consequential loss, indirect loss, real or anticipated
          loss of profit, loss of benefit, loss of revenue, loss of business,
          loss of goodwill, loss of opportunity, loss of savings, loss of
          reputation, loss of use and/or loss or corruption of data, whether
          under statute, contract, equity, tort (including negligence),
          indemnity, or otherwise.
        </p>
        <br />
        <p>
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">Accuracy of Materials</h3>
        <br />
        <p>
          The materials appearing on our website are not comprehensive and are
          for general information purposes only. BizViz does not warrant or make
          any representations concerning the accuracy, likely results, or
          reliability of the use of the materials on this website, or otherwise
          relating to such materials or on any resources linked to this website.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">Links</h3>
        <br />
        <p>
          BizViz has not reviewed all of the sites linked to its website and is
          not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement, approval, or control
          by BizViz of the site. Use of any such linked site is at your own risk
          and we strongly advise you make your own investigations with respect
          to the suitability of those sites.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">Right to Terminate</h3>
        <br />
        <p>
          We may suspend or terminate your right to use our website and
          terminate these Terms of Service immediately upon written notice to
          you for any breach of these Terms of Service.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">Severance</h3>
        <br />
        <p>
          Any term of these Terms of Service which is wholly or partially void
          or unenforceable is severed to the extent that it is void or
          unenforceable. The validity of the remainder of these Terms of Service
          is not affected.
        </p>
        <br />
        <h3 class="font-extrabold text-2xl">Governing Law</h3>
        <br />
        <p>
          These Terms of Service are governed by and construed in accordance
          with the laws of Illinois. You irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>

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
    titleTemplate: 'Terms of Service  - %s',
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
