import { createApp } from "vue";

// import the root component App from a single-file component.
// import App from "./App.vue";

const app = createApp({
  data() {
    return {
      message: "Hello World",
    };
  },
});

app.mount("#app");
