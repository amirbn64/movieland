import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

import { Routes } from './Routes';
Vue.use(VueRouter);
const router = new VueRouter({
  routes : Routes,
  mode : 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//     el:'#change_movie_items_btn_section',
//     data: {
//         current_page:'1',
//         end_page:'20',
//         isActive_previous_btn: false,
//         isActive_next_btn: true,
//     },
//     methods: {
//         nextPage(){
//             if(this.current_page < this.end_page){
//                 this.current_page++;
//             }
//             if(this.current_page > 1) {
//                 this.isActive_previous_btn = true;
//             }else {
//                 this.isActive_previous_btn = false;
//             }
//             if(this.current_page == this.end_page) {
//                 this.isActive_next_btn = false;
//             }else if(this.current_page < this.end_page){
//                 this.isActive_next_btn = true;
//             }
//         },
//         previousPage(){
//             if(this.current_page > 1) {
//                 this.current_page--;
//             }
//             if(this.current_page > 1) {
//                 this.isActive_previous_btn = true;
//             }else {
//                 this.isActive_previous_btn = false;
//             }
//             if(this.current_page == this.end_page) {
//                 this.isActive_next_btn = false;
//             }else if(this.current_page < this.end_page){
//                 this.isActive_next_btn = true;
//             }
//         }
//     }
// });
