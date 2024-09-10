import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

export async function useRecaptchFetch<T>(url: string | (() => string), _options: UseFetchOptions<T> = {}) {
  const token = ref('')

  const defaults: UseFetchOptions<T> = {
    retryStatusCodes: [401],
    retry: 1,
    onRequest({ options }) {
      // console.log('options: ', options);
      if (token.value) {
        options.headers = {
          ...options.headers,
          'Authorization': `JWT ${token.value}`
        }
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     token.value = '123456'
        //     resolve()
        //   }, 5000)
        // })
        return await $fetch('/api/token', {
          method: 'POST',
        }).then(
          (response) => {
            token.value = response.token
          }
        ).catch((error) => {
          console.log(error, 'ErrorRefreshToken')
          return error
        })
      }
    }
  }
  // for nice deep defaults, please use unjs/defu
  const params = defu(_options, defaults)

  return new Promise((resolve, reject) => {
    useFetch(url, params).then((response) => {
      console.log('response: ', response);

      resolve(response)
    })
  })
   

  return useFetch(url, params)
}