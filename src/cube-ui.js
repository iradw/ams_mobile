import Vue from 'vue'

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  // basic
  Button,
  TabBar,
  Toast,
  Dialog
} from 'cube-ui'
Vue.use(Style)
Vue.use(Button)
Vue.use(TabBar)
Vue.use(Toast)
Vue.use(Dialog)
