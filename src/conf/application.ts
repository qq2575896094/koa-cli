import Koa from 'koa'
import useMiddleware from './middleware'
import useRouter from "./routes";

const createServer = async () => {
    let koa: Koa = new Koa()

    koa = useMiddleware(koa)

    useRouter(koa)

    return koa
}

export default createServer
