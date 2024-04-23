
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

export const DoomHTMLDivElement: () => DoomHTMLElement = () => {
    return DoomHTMLElement("div")
}

export const DoomHTMLButtonElement: () => DoomHTMLElement = () => {
    return DoomHTMLElement("button")
}

export const DoomHTMLAnchorElement: () => DoomHTMLElement = () => {
    return DoomHTMLElement("a")
}