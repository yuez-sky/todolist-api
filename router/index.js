const router = require('koa-router')()

const user = require('./user.js')
const list = require('./list')

router.use('/user', user.routes()).use(user.allowedMethods())
router.use('/list', list.routes()).use(list.allowedMethods())

module.exports = router