
export interface DoomHTMLElement {
    tagName: string;
    attributes: Record<string, string>;
    children: Array<DoomHTMLElement>;
    onclick?: () => void,
    innerText?: string,
    innerHTML?: string,
}

export const DoomHTMLElement: (tagName?: string) => DoomHTMLElement = (tagName = "") => {
    return {
        tagName: tagName,
        attributes: {},
        children: []
    }
}

export const renderHTML = (element: DoomHTMLElement) => {
    let result: string;

    if (element.children.length > 0) {
        result = `\n<${element.tagName}>${element.children.map(e => renderHTML(e)).join("") }\n</${element.tagName}>`
        return result;
    } else {
        result = `\n<${element.tagName}>${(element.innerText)}</${element.tagName}>`
        return result;
    }
}

export const DoomHTMLDivElement: () => DoomHTMLElement = () => {
    return DoomHTMLElement("div")
}

export const DoomHTMLButtonElement: () => DoomHTMLElement = () => {
    return DoomHTMLElement("button")
}

export const DoomHTMLAnchorElement: () => DoomHTMLElement = () => {
    return DoomHTMLElement("a")
}