import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        basicSsl()
    ],
    server: {
        host: 'adesso.test',
        port: 44333,
        https: true
    }
})
