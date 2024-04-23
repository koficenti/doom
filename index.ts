import { Label, Button, ButtonProps, Container } from "./src/DoomComponent";

const CustomButton = (
    text: string,
    props: Omit<ButtonProps, 'child'>
) => {
    return Button({
        child: Label({text: text}),
        onclick: props.onclick,
        style: { color: "purple" }
    })
}

const Page = Container({
    children: [
        CustomButton("Hello World", {
            onclick: () => {
                console.log("Button says 'Hello world!'")
            },
        }),
        CustomButton("Another Button!", {
            onclick: () => {
                console.log("Button says 'Another Button!'")
            },
        }),
    ]
});

// Hmm so far so good maybe?
console.log(Page.render!())