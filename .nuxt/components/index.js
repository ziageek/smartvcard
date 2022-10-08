export { default as Action } from '../../components/Action.vue'
export { default as Attachment } from '../../components/Attachment.vue'
export { default as Check } from '../../components/Check.vue'
export { default as Colour } from '../../components/Colour.vue'
export { default as Cropper } from '../../components/Cropper.vue'
export { default as DocumentDownloader } from '../../components/DocumentDownloader.vue'
export { default as Download } from '../../components/Download.vue'
export { default as Featured } from '../../components/Featured.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeaderAppSumo } from '../../components/HeaderAppSumo.vue'
export { default as Help } from '../../components/Help.vue'
export { default as MediaPlayer } from '../../components/MediaPlayer.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as Preview } from '../../components/Preview.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as ProductShowcase } from '../../components/ProductShowcase.vue'
export { default as Vcard } from '../../components/Vcard.vue'

export const LazyAction = import('../../components/Action.vue' /* webpackChunkName: "components/action" */).then(c => c.default || c)
export const LazyAttachment = import('../../components/Attachment.vue' /* webpackChunkName: "components/attachment" */).then(c => c.default || c)
export const LazyCheck = import('../../components/Check.vue' /* webpackChunkName: "components/check" */).then(c => c.default || c)
export const LazyColour = import('../../components/Colour.vue' /* webpackChunkName: "components/colour" */).then(c => c.default || c)
export const LazyCropper = import('../../components/Cropper.vue' /* webpackChunkName: "components/cropper" */).then(c => c.default || c)
export const LazyDocumentDownloader = import('../../components/DocumentDownloader.vue' /* webpackChunkName: "components/document-downloader" */).then(c => c.default || c)
export const LazyDownload = import('../../components/Download.vue' /* webpackChunkName: "components/download" */).then(c => c.default || c)
export const LazyFeatured = import('../../components/Featured.vue' /* webpackChunkName: "components/featured" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHeaderAppSumo = import('../../components/HeaderAppSumo.vue' /* webpackChunkName: "components/header-app-sumo" */).then(c => c.default || c)
export const LazyHelp = import('../../components/Help.vue' /* webpackChunkName: "components/help" */).then(c => c.default || c)
export const LazyMediaPlayer = import('../../components/MediaPlayer.vue' /* webpackChunkName: "components/media-player" */).then(c => c.default || c)
export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c)
export const LazyPreview = import('../../components/Preview.vue' /* webpackChunkName: "components/preview" */).then(c => c.default || c)
export const LazyProductCard = import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c)
export const LazyProductShowcase = import('../../components/ProductShowcase.vue' /* webpackChunkName: "components/product-showcase" */).then(c => c.default || c)
export const LazyVcard = import('../../components/Vcard.vue' /* webpackChunkName: "components/vcard" */).then(c => c.default || c)
