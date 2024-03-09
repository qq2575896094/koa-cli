import {LoginParams} from "../types";

export const getUserByName = async (params: LoginParams):Promise<boolean> => {
    // TODO: 查询数据库, 返回内容
    return true
}

export const getUserInfo = async () => {
    const userInfo = {
        "username": "yuTian",
        "avatar": "https://avatars.githubusercontent.com/u/1?v=4",
        "type": "User",
        "phoneNumber": "13587700505",
        "realName": "mojombo",
        "gender": "男",
        "age": 25,
    }
    return userInfo
}
