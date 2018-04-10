const router = require('koa-router')()
const listControl = require('../controller/todolist')

router.get('/list',listControl.getList)
router.post('/add', listControl.add)
router.post('/edit', listControl.edit)

module.exports = router