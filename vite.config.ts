import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite';
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 配置别名
    },
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json'] // 引入文件省略后缀
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(
          __dirname,
          'src/assets/style/index.less'
        )}";`
      }
    }
  },



  plugins: [vue(),
  // your plugin installation
  Components({
    resolvers: [AntDesignVueResolver()],
  }),
  AutoImport({
    imports: ['vue', 'vue-router'],
    // 设置为在'src/'目录下生成解决ts报错，默认是当前目录('./'，即根目录)
    dts: 'src/auto-import.d.ts',
    // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
    // 'vue-global-api'这个插件仅仅解决vue3 hook报错
    eslintrc: {
      enabled: true,
    },
  }),

  ]
})
