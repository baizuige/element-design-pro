import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

function resolvePath(paths: string) {
  return path.resolve(__dirname, paths)
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      deep: true,
      extensions: ['vue'],
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/types/components.d.ts'
    })
  ],

  // 路径别名
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  }
})


