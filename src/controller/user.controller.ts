import {Context, Next} from "koa"
import {LoginParams} from "../types";
import { UserService } from '../service'


export default class {
	/**
	 * 登录
	 * @param ctx
	 * @param next
	 */
	static async login(ctx: Context, next: Next) {
		try {
			const loginParams = <LoginParams>ctx.request.body

			const existUser = await UserService.getUserByName(loginParams)

			// if (existUser) {
			// 	// TODO: jwt生成json, 并返回
			// 	next()
			// }
			ctx.state = {
				data: {token: "1232132"}
			}
			await next()
		} catch (e) {
			console.log(e)
		}
	}

	/**
	 * 获取用户信息
	 * @param ctx
	 * @param next
	 */
	static async getUserInfo(ctx: Context, next: Next) {
		const userInfo = UserService.getUserInfo()

		ctx.state = {
			data: userInfo
		}
		await next()
	}

	/**
	 * 登出
	 * @param ctx
	 * @param next
	 */
	static async logout(ctx: Context, next: Next) {
		// TODO:
	}
}
