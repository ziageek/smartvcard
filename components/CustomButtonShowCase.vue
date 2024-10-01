<template>
  <!-- <div class="content" :style="{ backgroundColor: `${colors.cardBg.color}` }"> -->
  <div :style="{ marginTop: `1%` }" class="controls prodInfo pd1">
    <!-- <a
      v-if="product.label"
      class="label"
      :style="{
        backgroundColor: `${colors.buttonBg.color}`,
        lineHeight: PreviewMode ? 'inherit' : '1.5rem'
      }"
      target="_blank"
      :href="product.link"
      ><p
        :style="{
          width: '230px'
        }"
        class="action"
      >
        {{
          product.label.length > 10
            ? product.label.substr(0, 10) + '...'
            : product.label
        }}
      </p></a
    > -->

    <div
      :style="{
        marginTop: '0% !important'
      }"
      v-if="product.label"
      class="actions"
    >
      <div
        id="cta"
        :style="{
          padding: '0%'
        }"
      >
        <a
          id="vcard"
          rel="noreferrer"
          v-if="product.label"
          target="_blank"
          :href="product.link"
          download
          :style="{
            backgroundColor: `${colors.buttonBg.color}`,
            width: '90%',
            padding: '1rem 1.5rem',
            lineHeight: PreviewMode ? 'inherit' : '1.5rem'
          }"
          aria-label="Save Contact"
        >
          <p class="action">
            {{
              product.label.length > 30
                ? product.label.substr(0, 30) + '...'
                : product.label
            }}
          </p>
        </a>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ['product', 'colors', 'PreviewMode'],
  methods: {
    getTitle(e) {
      return e
        .toLowerCase()
        .split(' ')
        .join('_')
    }
  }
}
</script>
