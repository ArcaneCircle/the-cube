import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        cube: "./src/js/Game.js",
      },
      output: {
        entryFileNames: "[name].js",
        dir: "./assets/js/",
      },
    },
  },
});
