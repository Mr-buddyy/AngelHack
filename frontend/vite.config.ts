import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { fileURLToPath, URL } from "url";

export default defineConfig({
    plugins: [solid()],
    server: {
        host: "0.0.0.0",
        // port: 3000,
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: [
            { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
            { find: "@assets", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)) },
            { find: "@cmp", replacement: fileURLToPath(new URL("./src/shared/cmp", import.meta.url)) },
            { find: "@stores", replacement: fileURLToPath(new URL("./src/shared/stores", import.meta.url)) },
            { find: "@use", replacement: fileURLToPath(new URL("./src/shared/use", import.meta.url)) },
        ],
    },
});
