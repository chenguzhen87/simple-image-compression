
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
    plugins: [dts()],
    server: {
        open: '/example/index.html'
    },
    preview: {
        open: '/example/index.html'
    },
    build: {
        lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'simpleImageComppression',
        fileName: (format) => `index.${format}.js`
        },
    }

})