import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hot: true,
    watch: {
      usePolling: true, // Useful for Docker environments or certain file systems
    },
  },
});
