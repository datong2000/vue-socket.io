import Vue from 'vue'
import App from './App.vue'
import VueSocketIo from 'vue-socket.io'
import store from './store'
import router from './router'


Vue.use(new VueSocketIo({
  // 生产环境建议关闭，开发环境可以打开
  debug: true,
  // 连接地址前缀，注意！这里只有前缀
  connection: 'http://metinseylan.com:1992',
  vuex: {
    // 这里vuex的部分如果不需要可以省略
    // store,
    // actionPrefix: 'SOCKET_',
    // mutationPrefix: 'SOCKET_',
    options: {
      path: "/socket"
    }
  }
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')