import {join } from "path";
import Koa from "koa";

import { loadFiles } from "conf/utils";
import Router from "koa-router";

const getRouters = <T extends Router>():T[] => {
    return loadFiles(join(__dirname, './*.ts'), join(__dirname, './index.ts'))
}

// module.exports = async appSever => {
//     const includeFilePath = path.join(__dirname, '*')
//     const ignoreFilePath = path.resolve(__dirname, 'index.js')
//
//     const routes = await loadFile(includeFilePath, ignoreFilePath)
//
//     routes.forEach(router => appSever.use(router.routes()).use(router.allowedMethods()))
//
//     // appSever.use(async (ctx, next) => {
//     //     ctx.body = {
//     //         statusCode: '404',
//     //         message: `Not Found: ${ctx.request.url}`
//     //     }
//     // })
// }

export default getRouters
