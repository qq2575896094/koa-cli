import {realpathSync} from "fs";
import {resolve} from "path";
import {globSync} from "glob";

/**
 * 是否是生产环境
 */
export const isProd = () => process.env.NODE_ENV === 'production'

/**
 * 路径解析
 * @param relativePath
 */
export const resolveApp = (relativePath: string): string => {
    const appDirectory = realpathSync(process.cwd())
    return resolve(appDirectory, relativePath)
}

/**
 * 获取路径下的所有文件
 * @param filePath
 * @param ignorePath
 */
export const loadFiles = <T>(filePath: string, ignorePath: string): T[] => {
    const files = globSync(filePath, {ignore: ignorePath})

    return files.map(file => require(file).default)
}
