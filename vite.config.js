import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "/",
  server: {
    host: true,
    allowedHosts: "3dff-193-116-90-44.ngrok-free.app",
  },
});
