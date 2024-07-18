import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import mixin from "./Mixins/mixin.vue";

// components
import miLoader from "./views/components/miLoader.vue";

const app = createApp(App);

app.component("miLoader", miLoader);

app.mixin(mixin);
app.use(Antd);
app.use(store);
app.use(router);
app.mount("#app");
