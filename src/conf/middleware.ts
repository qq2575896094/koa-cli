import Koa from 'koa'
import bodyParser from "koa-bodyparser";
import logger from "koa-logger"
import {isProd} from "./utils";
import response from "../middlewares/response";

/**
 * 加载全局中间件
 * @param app
 */
const useMiddleware = <T extends Koa>(app: T): T => {
    if (isProd()) app.use(logger())

    app.use(bodyParser())

    app.use(response())

    return app
}

export default useMiddleware
