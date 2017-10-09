const router = require('koa-router')()
const controller = require('./controller')

router.get('/', async ctx => {
  const users = await controller.read()
  ctx.body = users
})

router.post('/', async ctx => {
  const data = ctx.request.body
  const user = await controller.create({ data })
  ctx.body = user
})

module.exports = router.routes()
