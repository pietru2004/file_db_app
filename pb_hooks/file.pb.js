/// <reference path="../pb_data/types.d.ts" />


routerAdd("post", "/file", (c) => {
    const collection_name = "files"

    const data = $apis.requestInfo(c).data
    if (data["filename"]==null){
        return c.redirect(307, "/error");
    }
    let filename = data["filename"];
    filename = filename.replace(/'/g, "");
    let passwd = "";
    if (data["passwd"]!=null){
        passwd = String(data["passwd"])
    }
    passwd = passwd.replace(/'/g, "");

    let tittle = ""
    let desc = ""
    let password = ""
    const file_record = new Record();
    try {
        $app.dao().recordQuery(collection_name)
        .andWhere($dbx.hashExp({
        "filename":  filename,
        }))
        .limit(1)
        .one(file_record)

        //console.log(JSON.stringify(file_record));

        if (file_record){
            tittle=file_record.get("tittle")
            desc=file_record.get("desc")
            password=file_record.get("password")
        }
    } catch (error) {
        vid_desc="File does not exist"
        const utils = require(`${__hooks}/utils.js`)
        return c.html(404, utils.get_error_page(404,"File not found..."))
    }
    const recID = file_record.get("id")
    let links = []
    file_record.get("data").forEach(e => {
        links.push({
            "name":e,
            "link":`/api/files/${collection_name}/${recID}/${e}`
        })
    });

    const html = $template.loadFiles(
        `${__hooks}/views/base/layout.html`,
        `${__hooks}/views/base/header.html`,
        `${__hooks}/views/file.html`,
    ).render({
        "filename":filename,
        "tittle":tittle,
        "desc":desc,
        "links":links,
        "authorized":passwd==password,
    })

    return c.html(200, html)
})
routerAdd("get", "/file", (c) => {
    return c.redirect(307, "/error");
})