import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  // mode === 'production' 时强制使用生产 API 地址，不依赖 .env 文件加载
  const apiBase = mode === 'production'
    ? 'https://api.houkaijian.xyz'
    : 'http://localhost:2005'

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      __API_BASE_URL__: JSON.stringify(apiBase),
    },
  }
})
