import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: ['espritmobile.com'],
    host: true,
    port: 4321
  }
});