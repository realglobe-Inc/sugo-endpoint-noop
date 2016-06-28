/** This is an example to use sugo-endpoint-noop */

'use strict'

const sgServer = require('sg-server')

const server = sgServer({
  middlewares: [
    /* ... */
  ],
  endpoints: {
    '/foo/bar': require('sugo-endpoint-noop')({
      // Options
    })
  }
})

server.listen(3000)

