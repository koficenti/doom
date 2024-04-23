"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoomHTMLAnchorElement = exports.DoomHTMLButtonElement = exports.DoomHTMLDivElement = exports.DoomHTMLElement = void 0;
const DoomHTMLElement = (tagName = "") => {
    return {
        tagName: tagName,
        attributes: {},
        children: []
    };
};
exports.DoomHTMLElement = DoomHTMLElement;
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
