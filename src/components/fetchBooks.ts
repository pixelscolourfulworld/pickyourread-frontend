interface Book {
  title: string
  author: string
  isbn: string
  desc: string
  publisher: string
  apiKey: string
  series: string
  cover: string
}

export function getBooks(): Promise<Book[]> {
  const headers: Headers = new Headers()

  headers.set('Content-Type', 'applicaiton/json')
  headers.set('Accept', 'application/json')
  headers.set('X-Custom-Header', 'CustomValue')

  const request: RequestInfo = new Request('http://localhost:8080/dev/api/pickyourread/test', {
    method: 'GET',
    headers: headers,
  })

  return fetch(request)
    .then((res) => res.json())
    .then((res) => {
      return res as Book[]
    })
}
