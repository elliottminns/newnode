const router = require('koa-router')()
const users = require('api/users/routes')

router.use('/users', users)

module.exports = router
