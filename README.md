# Doom Web Framework

### Still in Construction 🚧

Demo (Experimenting right now):

```typescript
import { Label, Button, Container } from "./src/DoomComponent";

const Page = Container({
    children: [
        Button({
            child: Label({ text: "Hello world!" }),
            onclick: () => {
                console.log("Server: Button says 'Hello world!'")
            },
        }),
    ]
});

```

Inspired by Flutter and Phoenix, I do not want to touch HTML or CSS.
And I want to update the client via websockets. That's about it.