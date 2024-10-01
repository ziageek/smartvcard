<template>
  <div class="content" :style="{ backgroundColor: `${colors.cardBg.color}` }">
    <img
      v-if="product.image"
      :src="
        PreviewMode
          ? product.image.dataURI
          : `./media/${getTitle(product.image.title)}.${product.image.ext}`
      "
      alt="Product image"
    />
    <div class="controls prodInfo pd2">
      <p class="title ziacard">
        {{ product.title }}
      </p>
      <p v-if="product.description" class="desc ziacard">
        {{ product.description }}
      </p>
      <p v-if="product.price" class="price ziacard">
        {{ product.price }}
      </p>
      <a
        v-if="product.label"
        class="label"
        :style="{
          backgroundColor: `${colors.buttonBg.color}`,
          lineHeight: PreviewMode ? 'inherit' : '1.5rem'
        }"
        target="_blank"
        :href="product.link"
        ><p class="action">{{ product.label }}</p></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'colors', 'PreviewMode'],
  methods: {
    getTitle (e) {
      return e
        .toLowerCase()
        .split(' ')
        .join('_')
    }
  }
}
</script>
