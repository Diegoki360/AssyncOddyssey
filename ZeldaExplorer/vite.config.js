import { defineConfig } from "vite";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "https://botw-compendium.herokuapp.com",
                changeOrigin: true
            }
        }
    }
});