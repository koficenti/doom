"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Button = exports.Container = exports.ComponentKind = void 0;
require("crypto");
const DoomHTML_1 = require("./DoomHTML");
var ComponentKind;
(function (ComponentKind) {
    ComponentKind[ComponentKind["Container"] = 0] = "Container";
    ComponentKind[ComponentKind["Margin"] = 1] = "Margin";
    ComponentKind[ComponentKind["Button"] = 2] = "Button";
    ComponentKind[ComponentKind["Label"] = 3] = "Label";
})(ComponentKind || (exports.ComponentKind = ComponentKind = {}));
const Container = (props) => {
    const { children } = props;
    return {
        id: crypto.randomUUID(),
        kind: ComponentKind.Container,
        children,
        render: function () {
            let container = (0, DoomHTML_1.DoomHTMLDivElement)();
            children.forEach(e => {
                container.children.push(e.render());
            });
            container.attributes["id"] = this.id;
            return container;
        }
    };
};
exports.Container = Container;
const Button = (props) => {
    const { child, onclick } = props;
    return {
        id: crypto.randomUUID(),
        kind: ComponentKind.Button,
        child,
        onclick,
        render: function () {
            let button = (0, DoomHTML_1.DoomHTMLButtonElement)();
            button.children.push(child.render());
            button.onclick = onclick;
            button.attributes["id"] = this.id;
            return button;
        }
    };
};
exports.Button = Button;
const Label = (props) => {
    const { text } = props;
    return {
        id: crypto.randomUUID(),
        kind: ComponentKind.Label,
        text,
        render: function () {
            let label = (0, DoomHTML_1.DoomHTMLAnchorElement)();
            label.innerText = text;
            label.attributes["id"] = this.id;
            return label;
        }
    };
};
exports.Label = Label;
