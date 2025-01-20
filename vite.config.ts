import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-index-to-404",
      apply: "build",
      closeBundle: () => {
        // copy index.html to 404.html
        copyFileSync(resolve(__dirname, "dist/index.html"), resolve(__dirname, "dist/404.html"));
      },
    },
  ],
  envDir: "./env",
  // base: process.env.CI ? "/my-react-supabase-app/" : "/",
});