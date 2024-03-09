import Router from "koa-router"
import UserController from "../controller/user.controller"

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/login', UserController.login)
userRouter.post('/getUserInfo', UserController.getUserInfo)
userRouter.post('/logout', UserController.logout)

export default userRouter
