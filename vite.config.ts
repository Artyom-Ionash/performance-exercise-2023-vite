import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/performance-exercise-2023-vite/",
  plugins: [react()],
});
