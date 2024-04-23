import express, {Request, Response} from "express"
import { Component } from "./DoomComponent";
import { renderHTML } from "./DoomHTML";

// const app = express();

// app.get("/", (req: Request, res: Response) => {
//     res.send("<h1>Hello world!</h1>")
// });

// app.listen(3000, () => {
//     console.log("Server is now running!")
// })

const DoomServer = {
    app: express(),
    routes: {} as Record<string, Component<unknown>>,

    route(route: string, message: Component<unknown>) {
        this.routes[route] = message;
    },

    begin() {
        for (let route in this.routes){
            this.app.get(route, (req: Request, res: Response) => {
                res.send(renderHTML(this.routes[route].render!()));
            });
        }

        this.app.listen(3000, () => {
            console.log("DoomServer Has Begun");         
        });
    }
}

export default DoomServer;