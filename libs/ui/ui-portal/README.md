# Portal

Wrapper for [`@chakra-ui/portal`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/portal) package.

## Usage

`Portal` is used to transport any component or element to the end of `document.body` and renders a React tree into it.

Useful for rendering a natural React element hierarchy with a different DOM hierarchy to prevent parent styles from clipping or hiding content (for popovers, dropdowns, and modals). It supports nested portals.

You can render the contents within a portal to a different DOM node, instead of the default `document.body`. Pass the `containerRef` prop and set its value to the `ref` of the container you'd like to use.

```tsx
import { Portal } from "@ricardocosta/ui-portal";

function Basic() {
  return (
    <Box bg="red.400" color="white">
      I'm here,
      <Portal>This text is portaled at the end of document.body!</Portal>
    </Box>
  );
}

function CustomContainer() {
  const ref = React.useRef();
  return (
    <Box bg="red.400" color="white">
      I'm here,
      <Portal containerRef={ref}>Portal: This text is portaled to the yellow box!</Portal>
      <Box ref={ref} bg="yellow.500">
        <div>Container: Hey,</div>
      </Box>
    </Box>
  );
}

function Nesting() {
  const ref = React.useRef();
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hey welcome,
          <Portal>Child: I'm attached to my parent portal</Portal>
        </Box>
      </Portal>
      <Box bg="red.400" color="white" ref={ref} />
    </div>
  );
}
```

[🔗 ChakraUI Portal](https://chakra-ui.com/docs/components/portal)
