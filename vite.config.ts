import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/L2/", // Указываем имя вашего репозитория
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist", // Убедитесь, что путь сборки совпадает со скриптом развёртывания
  },
});
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: ["babel-plugin-styled-components"],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
//   build: {
//     outDir: "build",
//   },
// });
