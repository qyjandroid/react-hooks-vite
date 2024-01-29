import { defineConfig,loadEnv } from 'vite';
import { resolve,extname } from 'path';
import react from '@vitejs/plugin-react';
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ command,mode })=>{
  const envDir=resolve(__dirname, "env");
  const env = loadEnv(process.env.BUILD_ENV, envDir, '');
  const cdnRoot = env.VITE_CDN_ROOT;
  console.log("读取环境配置：",envDir,"===",env.VITE_ENV);
  return {
    plugins: [
      react(),
      legacy({
        targets: ["Android >= 5", "iOS >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        renderLegacyChunks: true,
      })],
    base:cdnRoot,
    build: {
        rollupOptions: {
          output: {
            // 将 node_modules 中的依赖打包到一个文件中
            manualChunks(id, { getModuleInfo, getModuleIds }) {
              if (id.indexOf("node_modules") >= 0) {
                return "vendor";
              }
            },
        },
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/assets/css/variables.less";`
        }
      },
    },
    resolve:{
      alias: [
        { find: '@', replacement: '/src' },
      ]
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_ENV),
      __VITE_API_SERVER__:JSON.stringify(env.VITE_API_SERVER),
    },
    server: {
      port: 8000,
      proxy: {
        "/pxyiad": {
          target: "https://aaa.cn/",
          secure: false, // 不验证代理目标的SSL证书
          changeOrigin: true,
        },
      },
    },
  }
})

