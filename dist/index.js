"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DoomComponent_1 = require("./src/DoomComponent");
const CustomButton = (text, props) => {
    return (0, DoomComponent_1.Button)({
        child: (0, DoomComponent_1.Label)({ text: text }),
        onclick: props.onclick,
        style: { color: "purple" }
    });
};
const Page = (0, DoomComponent_1.Container)({
    children: [
        CustomButton("Hello World", {
            onclick: () => {
                console.log("Button says 'Hello world!'");
            },
        }),
        CustomButton("Another Button!", {
            onclick: () => {
                console.log("Button says 'Another Button!'");
            },
        }),
    ]
});
console.log(Page.render());
