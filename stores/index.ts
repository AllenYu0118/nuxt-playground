export const useRentListStore = defineStore('home', () => {
  const data = ref({})
  const config = useRuntimeConfig()

  async function fetchData () {
    const result = await useFetch(`${config.public.protocol}://127.0.0.1:3030/test/home`, {
      method: 'get',
      onRequest({ request, options }) {
        console.log('options: ', options)
        console.log('request: ', request)
      },
      onRequestError({ request, options, error, response }) {
        console.log('response: ', response)
        console.log('onRequestError error: ', error)
        console.log('onRequestError options: ', options)
        console.log('onRequestError request: ', request)
      },
      onResponseError({ request, response, options }) {
        console.log('onResponseError options: ', options)
        console.log('onResponseError response: ', response)
        console.log('onResponseError request: ', request)
      },
    })

    console.log('result: ', result.data.value);

    return result
  }


  return {
    fetchData,
    data,
  }
  
})