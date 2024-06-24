/// <reference path="../pb_data/types.d.ts" />
//app created on 25.09.2023

routerAdd("get", "/", (c) => {
    const html = $template.loadFiles(
        `${__hooks}/views/base/layout.html`,
        `${__hooks}/views/base/header.html`,
        `${__hooks}/views/base/footer.html`,
        `${__hooks}/views/main.html`,
    ).render({})

    return c.html(200, html)
})

routerAdd("get","/error",(c) => {
    const utils = require(`${__hooks}/utils.js`)
    return c.html(404, utils.get_error_page(404,`Unknown Error`))
}, $apis.activityLogger($app))

routerAdd("post","/error",(c) => {
    const utils = require(`${__hooks}/utils.js`)
    return c.html(404, utils.get_error_page(404,`Unknown Error`))
}, $apis.activityLogger($app))