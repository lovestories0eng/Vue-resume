import Vue from 'vue';
// import App from './vue-iresume.vue';
import App from '../example/Demo.vue';
import VueRouter from 'vue-router';
console.log(App);

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    render: (h) => h(App)
})