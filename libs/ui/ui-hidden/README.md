# Hidden

Wrapper for [`@chakra-ui/visually-hidden`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/visually-hidden) package.

## Usage

VisuallyHidden is a common technique used in web accessibility to hide content from the visual client, but keep it readable for screen readers.

It is used to visually hide an element but to make it accessible for screen-readers. It renders html `<span>` as a proxy.

- `VisuallyHidden`: Visually hidden span component used to hide elements on screen.
- `VisuallyHiddenInput`: Visually hidden input component used for designing custom input components using the html input as a proxy

```tsx
import { VisuallyHidden, VisuallyHiddenInput } from "@ricardocosta/ui-hidden";

<Button>
  <VisuallyHidden>Checkmark</VisuallyHidden>
  <CheckIcon />
</Button>;

<Box>
  <Heading>Title and description</Heading>
  <VisuallyHidden>This will be hidden</VisuallyHidden>
</Box>;

// It renders html <input> as a proxy.
<VisuallyHiddenInput
  defaultChecked
  onChange={(event) => {
    console.log(event.target.checked);
  }}
/>;
```

[🔗 ChakraUI Visually Hidden](https://chakra-ui.com/docs/components/visually-hidden)
