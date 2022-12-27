# Transition

Wrapper for [`@chakra-ui/transition`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/transition) package.

## Usage

There are four components `Fade`, `ScaleFade`, `Slide`, and `SlideFade` to provide simple transitions.

Most transition components are made using `framer-motion`. They accept the following props:

- Common props from framer's `motion` elements
- `in` prop used to trigger the transition
- `unmountOnExit` prop used to unmount the component when it is not visible.

```tsx
import { Collapse, Fade, ScaleFade, Slide, SlideFade } from "@ricardocosta/ui-transition";

function FadeExample() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          Fade
        </Box>
      </Fade>
    </>
  );
}

function ScaleFadeExample() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          Fade
        </Box>
      </ScaleFade>
    </>
  );
}

function SlideExample() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          <Lorem count={2} />
        </Box>
      </Slide>
    </>
  );
}

function SlideFadeExample() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <SlideFade in={isOpen} offsetY="20px">
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          <Lorem count={1} />
        </Box>
      </SlideFade>
    </>
  );
}

function CollapseExample() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          <Lorem count={1} />
        </Box>
      </Collapse>
    </>
  );
}
```

[🔗 ChakraUI Transition](https://chakra-ui.com/docs/components/transitions)
