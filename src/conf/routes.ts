import Koa from "koa";
import Router from "koa-router";
import getRouters from "../routes";

const useRouter = <T extends Koa>(app: T) => {
    const routes = getRouters()

    routes.forEach((router:Router) => app.use(router.routes()).use(router.allowedMethods()))
}

export default useRouter
