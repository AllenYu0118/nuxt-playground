export default defineEventHandler((event) => {
  const headers = getHeaders(event)

  if (headers.authorization !== 'JWT 123456') {
    setResponseStatus(event, 401)

    return {
      error: 'Unauthorized'
    }
  } else {
    setResponseStatus(event, 200)
  }
  
  return {
    hello: 'world'
  }
})
