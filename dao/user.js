const dbUtils = require('../mysql/util/db.js')

async function create (data) {
    console.log(data)
    let sql = `
        insert into \`user_info\`
        set \`unique\` = '${data.unique}',
            \`email\`='${data.email}',
            \`name\`='${data.name}',
            \`password\`='${data.password}',
            \`dated\`='${data.dated}',
            \`modified_dated\`='${data.modified_dated}'
    `
    let result = await dbUtils.query(sql)
    return result
}

async function getByPwd (data) {
    let sql = `
        select \`${data.fields.split(',').join('\`,\`')}\`
        from \`user_info\`
        where \`${data.type}\`='${data.name}'
        And \`password\`='${data.password}'
        limit 1
    `
    console.log(sql)
    let result = await dbUtils.query(sql)
    return result
}


async function getByUnique(data) {
    let sql = `
        select ${data.fields} 
        where unique=${data.unique}
        limit 1
    `
    let result = await dbUtils.query(sql)
    return result
}


module.exports = {
    create,
    getByPwd,
    getByUnique
}