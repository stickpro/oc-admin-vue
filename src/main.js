import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/index.css'

const app = createApp(App);

let AppConfig = {}

if (window.EMAIL_BOT) {
  AppConfig = Object.assign(AppConfig, window.EMAIL_BOT)
  app.provide('$config', AppConfig);
}

app.mount("#app");