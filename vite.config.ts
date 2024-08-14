import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin
} from '@zougt/vite-plugin-theme-preprocessor'
import path from 'path'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

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

  server: {
    // ← ← ← ← ← ←
    host: '0.0.0.0', // ← 新增内容 ←
    port: 5023
  },

  plugins: [
    vue(),
    viteCommonjs(),
    // your plugin installation
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 设置为在'src/'目录下生成解决ts报错，默认是当前目录('./'，即根目录)
      dts: 'src/auto-import.d.ts',
      // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
      // 'vue-global-api'这个插件仅仅解决vue3 hook报错
      eslintrc: {
        enabled: true
      }
    }),
    // 创建动态主题切换
    themePreprocessorPlugin({
      less: {
        // 启用任意主题色模式
        arbitraryMode: true,
        // 默认的主题色，用于对其他颜色值形成对比值，通常与 src/theme/theme-vars.less 中的一个主题色相同，也可以不相同，就看是不是你想要的效果
        defaultPrimaryColor: '#1a91ff', // 使用ant默认的#1890ff 会有bug
        // 只需提供一组变量文件，变量文件内容不应该夹带样式代码，设定上只需存在变量
        multipleScopeVars: [
          {
            // 必需
            scopeName: 'theme-default',
            // path 和 varsContent 必选一个
            path: path.resolve('src/theme/theme-vars.less')
            // varsContent参数等效于 path文件的内容 ，可以让 defaultPrimaryColor 与 "@primary-color"值只写一遍， varsContent 与 path 选一个使用
            // varsContent:`@primary-color:${defaultPrimaryColor};`
          }
        ]
        // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
        // includeStyleWithColors: [
        //   {
        //     // color也可以是array，如 ["#ffffff","#000"]
        //     color: '#ffffff',
        //     // 排除属性，如 不提取背景色的#ffffff
        //     excludeCssProps: ['background', 'background-color'],
        //     // 排除选择器，如 不提取以下选择器的 #ffffff
        //     excludeSelectors: [
        //       '.ant-btn-link:hover, .ant-btn-link:focus, .ant-btn-link:active'
        //     ]
        //   }
        // ]
      }
      // scss:{

      // },
    }),
    // 主题热更新，不得已分开插件，因为需要vite插件顺序enforce
    themePreprocessorHmrPlugin()
  ]
})
