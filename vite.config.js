import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        //"webxdc.js", // ignore react stuff
        "assets/css/styles.css",
      ],
    },
  },
});
