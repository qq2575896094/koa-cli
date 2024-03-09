import createServer from 'conf/application'
import {bootstrapAfter, bootstrapBefore} from "conf/bootstrap";

type Port = string | number
type Mode = 'production'|'development'

const createApp = async (port: Port, mode: Mode) => {
    try {
        const app = await createServer()
        return app.listen(port, () => {
            console.log(`server listening on ${port}, in ${mode} mode.`)
        })
    } catch (e) {
        console.error(e)
    }
}

(async () => {
    bootstrapBefore()

    const { PORT, MODE} = <{ PORT: Port, MODE: Mode }>process.env

    await createApp(PORT, MODE)

    bootstrapAfter()
})()
