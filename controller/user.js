const UserService = require('../service/user.js')

const User = {
    async login (ctx) {
        let data = ctx.request.body
        ctx.body = ctx.request.body

        // 数据验证
        if (!data.name && !data.email) {
            ctx.body = {
                state: 2001,
                mess: '登陆名丢失'
            }
            return
        }
        if  (!data.password) {
            ctx.body = {
                state: 2002,
                mess: '密码丢失'
            }
        }

        let formdata = {
            password: data.password,
            fields: 'unique,name,email,dated'
        }
        if (data.name) {
            formdata.name = data.name
        } else {
            formdata.email = data.email
        }

        let result = await UserService.login(formdata)
        ctx.body = result
    },
    async register (ctx) {
        let data = ctx.request.body
        console.log(data.name)

        if (!data.name) {
            ctx.body = {
                state: 2001,
                mess: 'name缺失'
            }
            return
        }
        if (!data.email) {
            ctx.body = {
                state: 2002,
                mess: 'email缺失'
            }
            return
        }
        if (!data.password) {
            ctx.body = {
                state: 2003,
                mess: 'password缺失'
            }
            return
        }

        let result = await UserService.register(data)
        ctx.body = result
    },
    async getByUnique (ctx) {

    }
}

module.exports = User