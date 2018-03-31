const router = require('koa-router')()
const UserControl = require('../controller/user.js')

router.post('/login',UserControl.login)
router.post('/register', UserControl.register)

module.exports = router