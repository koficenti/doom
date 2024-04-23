"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DoomComponent_1 = require("./src/DoomComponent");
const DoomServer_1 = __importDefault(require("./src/DoomServer"));
const Homepage = (0, DoomComponent_1.Container)({
    children: [
        (0, DoomComponent_1.Button)({
            child: (0, DoomComponent_1.Label)({ text: "Click me!" }),
            onclick: () => { }
        }),
        (0, DoomComponent_1.Label)({ text: "Hello world!" })
    ]
});
const server = new DoomServer_1.default();
server.route("/", Homepage);
server.begin();
