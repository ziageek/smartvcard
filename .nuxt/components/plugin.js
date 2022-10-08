import Vue from 'vue'

const components = {
  Action: () => import('../../components/Action.vue' /* webpackChunkName: "components/action" */).then(c => c.default || c),
  Attachment: () => import('../../components/Attachment.vue' /* webpackChunkName: "components/attachment" */).then(c => c.default || c),
  Check: () => import('../../components/Check.vue' /* webpackChunkName: "components/check" */).then(c => c.default || c),
  Colour: () => import('../../components/Colour.vue' /* webpackChunkName: "components/colour" */).then(c => c.default || c),
  Cropper: () => import('../../components/Cropper.vue' /* webpackChunkName: "components/cropper" */).then(c => c.default || c),
  DocumentDownloader: () => import('../../components/DocumentDownloader.vue' /* webpackChunkName: "components/document-downloader" */).then(c => c.default || c),
  Download: () => import('../../components/Download.vue' /* webpackChunkName: "components/download" */).then(c => c.default || c),
  Featured: () => import('../../components/Featured.vue' /* webpackChunkName: "components/featured" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  HeaderAppSumo: () => import('../../components/HeaderAppSumo.vue' /* webpackChunkName: "components/header-app-sumo" */).then(c => c.default || c),
  Help: () => import('../../components/Help.vue' /* webpackChunkName: "components/help" */).then(c => c.default || c),
  MediaPlayer: () => import('../../components/MediaPlayer.vue' /* webpackChunkName: "components/media-player" */).then(c => c.default || c),
  Modal: () => import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c),
  Preview: () => import('../../components/Preview.vue' /* webpackChunkName: "components/preview" */).then(c => c.default || c),
  ProductCard: () => import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c),
  ProductShowcase: () => import('../../components/ProductShowcase.vue' /* webpackChunkName: "components/product-showcase" */).then(c => c.default || c),
  Vcard: () => import('../../components/Vcard.vue' /* webpackChunkName: "components/vcard" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
