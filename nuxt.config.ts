import mkcert from 'vite-plugin-mkcert'

const devServerConfig = {
  port: 3030,
}

const protocol = process.env.PROTOCOL

if (protocol === 'https') {
  // @ts-ignore
  devServerConfig.https = {
    cert: './certs/cert.pem',
    key: './certs/dev.pem',
  }
}

export default defineNuxtConfig({
  devServer: devServerConfig,
  nitro: {
    devProxy: {
      '/test': {
        target: 'https://bff-house.debug.591.com.tw',
        changeOrigin: true,
      },
    }
  },
  modules: [
    ['@pinia/nuxt', {
      autoImports: ['defineStore'],
    }],
  ],
  runtimeConfig: {
    public: {
      protocol,
    }
  },

  vite: {
    plugins: [
      mkcert({
        hosts: ['house-rent.dev.591.com.tw', 'house-sale.dev.591.com.tw', 'house-business.dev.591.com.tw', 'land.dev.591.com.tw', 'localhost', '127.0.0.1'],
        savePath: './certs', // save the generated certificate into certs directory
        force: true, // force generation of certs even without setting https property in the vite config
      }),
    ]
  },

  compatibilityDate: '2024-08-27'
})