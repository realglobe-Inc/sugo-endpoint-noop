/**
 * Endpoint to do nothing.
 * @function sugoEndpointNoop
 * @param {object} [options] - Optional settings.
 * @returns {function} - Defined app function.
 */

'use strict'

const co = require('co')
const debug = require('debug')('sugo:endpoint:noop')

/** @lends sugoEndpointNoop */
function create (options = {}) {
  let endpoint = co.wrap(function * middleware (ctx) {
    debug('handle')
    ctx.body = null
  })

  Object.assign(endpoint, {
    /**
     * Description of this middleware.
     */
    $desc: 'Do nothing'
  })

  return endpoint
}

module.exports = create
