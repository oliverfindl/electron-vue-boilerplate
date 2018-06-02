"use strict";

import Vue from "vue";
import App from "@/App.vue";

Vue.config.productionTip = false;

new Vue({
	template: "<app />",
	components: { App }
}).$mount("#app");
