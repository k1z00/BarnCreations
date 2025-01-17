import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base:'/BarnCreations/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler' 
      }
    }, 
  },
});