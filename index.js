const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const routers = require('./router/index')
const bodyParser = require('koa-bodyparser')

// ctx.body 中间健值
app.use(bodyParser())

const router = new Router()
router.post('/', async (ctx) => {
    console.log(ctx)
    ctx.body = ctx.request.body
})
app.use(router.routes()).use(routers.allowedMethods())

// 路由
app.use(routers.routes()).use(routers.allowedMethods())

app.listen('4000')
