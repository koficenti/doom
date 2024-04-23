"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoomHTMLAnchorElement = exports.DoomHTMLButtonElement = exports.DoomHTMLDivElement = exports.renderHTML = exports.DoomHTMLElement = void 0;
const DoomHTMLElement = (tagName = "") => {
    return {
        tagName: tagName,
        attributes: {},
        children: []
    };
};
exports.DoomHTMLElement = DoomHTMLElement;
const renderHTML = (element) => {
    let result;
    if (element.children.length > 0) {
        result = `\n<${element.tagName}>${element.children.map(e => (0, exports.renderHTML)(e)).join("")}\n</${element.tagName}>`;
        return result;
    }
    else {
        result = `\n<${element.tagName}>${(element.innerText)}</${element.tagName}>`;
        return result;
    }
};
exports.renderHTML = renderHTML;
const DoomHTMLDivElement = () => {
    return (0, exports.DoomHTMLElement)("div");
};
exports.DoomHTMLDivElement = DoomHTMLDivElement;
const DoomHTMLButtonElement = () => {
    return (0, exports.DoomHTMLElement)("button");
};
exports.DoomHTMLButtonElement = DoomHTMLButtonElement;
const DoomHTMLAnchorElement = () => {
    return (0, exports.DoomHTMLElement)("a");
};
exports.DoomHTMLAnchorElement = DoomHTMLAnchorElement;
