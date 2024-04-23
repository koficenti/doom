import { Route, Label, Button, Container } from "./src/DoomComponent";
import DoomServer from "./src/DoomServer";

Route({ path: "/", component: Label({ text: "Hello world!" }) })

Route({
    path: "/other",
    component: Container({
        children: [
            Label({ text: "Hello world!" }),
            Label({ text: "Hello world!" }),
            Label({ text: "Hello world!" }),        
        ]
    })
})

DoomServer.begin()