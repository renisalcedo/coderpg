const test = require('ava')
const request = require('supertest')

const app = require('../server')

test('Creates user', async t => {
  const res = await request(app)
    .post()
})
