import "crypto"
import { DoomHTMLAnchorElement, DoomHTMLButtonElement, DoomHTMLDivElement, DoomHTMLElement } from "./DoomHTML"
import { Style } from "./DoomStyle"

export enum ComponentKind {
    Container,
    Margin,
    Button,
    Label,
}

export type Base = {
    id?: string,
    kind?: ComponentKind,
    style?: Style,
    render?: () => DoomHTMLElement
}
export type Component<T> = Base & T
export type Composite<A extends Component<Base>, B extends Component<Base>> = (props?: B) => B

export type ContainerProps = { children: Component<unknown>[] }
export const Container: Composite<Component<unknown>, Component<ContainerProps>> = (props) => {
    const { children } = props as ContainerProps;

    return {        
        id: crypto.randomUUID(),
        kind: ComponentKind.Container,
        children,
        
        render: function() {
            let container = DoomHTMLDivElement();
            children.forEach(e => {
                container.children.push(e.render!())
            });

            container.attributes["id"] = this.id!;
            return container;
        }
    }
}

export type ButtonProps = { child: Component<unknown>, onclick: () => void }
export const Button: Composite<Component<unknown>, Component<ButtonProps>> = (props) => {
    const { child, onclick } = props as ButtonProps;

    return {
        id: crypto.randomUUID(),
        kind: ComponentKind.Button,
        child,
        onclick,

        render: function() {
            let button = DoomHTMLButtonElement();
            button.children.push(child.render!());
            button.onclick = onclick;

            button.attributes["id"] = this.id!;
            return button;
        }
    }
}

export type LabelProps = { text: string }
export const Label: Composite<Component<unknown>, Component<LabelProps>> = (props) => {
    const { text } = props as LabelProps;

    return {
        id: crypto.randomUUID(),
        kind: ComponentKind.Label,
        text,

        render: function() {
            let label = DoomHTMLAnchorElement();
            label.innerText = text;

            label.attributes["id"] = this.id!;
            return label;
        }
    }
}