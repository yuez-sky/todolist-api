const userDao = require('../dao/user')
const moment = require('moment')
const md5 = require('md5')

const user = {
    async login (data) {
        let type = data.name ? 'name' : 'email'
        let formdata = {
            type: type,
            name: data[type],
            password: md5(data.password),
            fields: data.fields
        }

        let result = await userDao.getByPwd(formdata) 
        return result
    },

    /**
     * 
     * @param {Object} data 
     * name,email,password
     */
    async register (data) {
        console.log(data)
        let formdata = {
            unique: md5(Math.random()),
            name: data.name,
            email: data.email,
            password: md5(data.password),
            modified_dated: moment().format('YYYY-MM-DD HH:mm:ss'),
            dated: moment().format('YYYY-MM-DD HH:mm:ss')
        }

        let result = await userDao.create(formdata)
        return result
    }
}

module.exports = user