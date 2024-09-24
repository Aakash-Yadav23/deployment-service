import { Application } from "express";
import getConfig from "../config/Config";
import { Express } from "./Express";



export class App {

    private app: Application


    constructor() {
        this.app = new Express().express;
    }

    public initServer = () => {
        const env = getConfig();
        this.app.listen(env.PORT, () => {
            console.log(`🔥 Server Started listen on http://localhost:${env.PORT}`)
        })

    }


}