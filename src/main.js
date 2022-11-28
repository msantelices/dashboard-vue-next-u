import VueApexCharts from "vue3-apexcharts"
import Vue3EasyDataTable from 'vue3-easy-data-table'
import { createApp } from 'vue'
import './style.css'
import 'vue3-easy-data-table/dist/style.css'
import App from './App.vue'

createApp(App)
    .component('EasyDataTable', Vue3EasyDataTable)
    .use(VueApexCharts)
    .mount('#app')
