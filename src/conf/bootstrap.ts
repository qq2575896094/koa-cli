import {config} from 'dotenv'
import { isProd, resolveApp } from "./utils";

export type ModeType = 'development' | 'production'

export const bootstrapBefore = () => {
    if (isProd()) {
        config({ path: resolveApp('.env.production') })
    } else {
        config({ path: resolveApp('.env.development') })
    }

    config({ path: resolveApp('.env')})

    console.log(`configuration files is loaded!`)
}

export const bootstrapAfter = () => {}
