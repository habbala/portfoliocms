export function initClient () {

  let client;

  const contentful = require('contentful')

  return client = contentful.createClient({
    space: 'q5d90ddpmtuz',
    accessToken: '8e5c9cbf2509af385100ca4224368f3296c167ff7dccb291a5f058819c4df1f3',
    host: 'cdn.contentful.com'
  })
}
