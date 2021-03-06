/**
 * Endpoint to do nothing.
 * @module sugo-endpoint-noop
 * @version 1.0.2
 */

'use strict'

const create = require('./create')
const pkg = require('../package.json')

let lib = create.bind(this)

Object.assign(lib, create, {
 create,
 version: pkg.version
})

module.exports = lib
