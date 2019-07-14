import DefaultLayout from '~/layouts/Default.vue'
import {VueMasonryPlugin} from 'vue-masonry';


export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueMasonryPlugin)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Mali:700|Nunito'
  })
}