import {Context, Next} from "koa";

interface IResponse {
    statusCode: number,
    message: string,
    data?: any
}

const response = () => {
    return async (ctx: Context, next: Next) => {
        await next()
        ctx.body = {} as IResponse
        ctx.body = {
            statusCode: ctx.status,
            message: ctx.state.message || "success",
            data: ctx.state.data || {}
        }
    }
}

export default response
