# Hooks

Wrapper for [`@chakra-ui/hooks`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/hooks) package.

- [Hooks](#hooks)
    - [useBoolean](#useboolean)
    - [useBreakpointValue](#usebreakpointvalue)
    - [useClipboard](#useclipboard)
    - [useConst](#useconst)
    - [useControllable](#usecontrollable)
    - [useDimensions](#usedimensions)
    - [useDisclosure](#usedisclosure)
    - [useMediaQuery](#usemediaquery)
    - [useMergeRefs](#usemergerefs)
    - [useOutsideClick](#useoutsideclick)
    - [usePrefersReducedMotion](#useprefersreducedmotion)
    - [useTheme](#usetheme)
    - [useToken](#usetoken)

### useBoolean

`useBoolean` is a custom hook used to manage a boolean value with `on`, `off` and `toggle` functions.

**Parameters**

The hook `useBoolean` accepts the initial boolean value, by default is `false`.

**Return Value**

The `useBoolean` hook returns a stateful boolean value and an object with the following functions to update it:

| Name     | Type         | Description                                    |
| :------- | :----------- | :--------------------------------------------- |
| `on`     | `() => void` | A function to set the boolean value to `true`  |
| `off`    | `() => void` | A function to set the boolean value to `false` |
| `toggle` | `() => void` | A function to negate the boolean state         |

```tsx
import { useBoolean } from "@ricardocosta/hooks";

function ToogleExample() {
  const [flag, setFlag] = useBoolean();

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>Click me to toggle the boolean value</button>
    </>
  );
}

function OnOffExample() {
  const [flag, setFlag] = useBoolean();

  return (
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? "The flag is ON!" : "Hover me to turn ON"}
    </div>
  );
}
```

[🔗 ChakraUI useBoolean](https://chakra-ui.com/docs/hooks/use-boolean)

### useBreakpointValue

`useBreakpointValue` is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size.

The new `variant` and `size` props don't currently accept responsive values (specified as objects or arrays), but `useBreakpointValue` is a good way to achieve the same behavior.

**Parameters**

An object with the value for each breakpoint.

⚠️ Make sure to provide a base value when using `useBreakpointValue` so it doesn't return `undefined` in the first render.

**Return Value**

The `useBreakpointValue` hook returns the value for the current breakpoint.

```tsx
import { useBreakpointValue } from "@ricardocosta/hooks";

function Example() {
  const variant = useBreakpointValue(
    {
      base: "outline",
      md: "solid",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: "md",
    }
  );

  return (
    <VStack align="flex-start">
      <Text>Resize your window to see the button variant change</Text>
      <Button colorScheme="teal" variant={variant}>
        Button
      </Button>
    </VStack>
  );
}
```

[🔗 ChakraUI useBreakpointValue](https://chakra-ui.com/docs/hooks/use-breakpoint-value)

### useClipboard

`useClipboard` is a custom hook that handles copying content to clipboard.

**Parameters**

The `useClipboard` hook takes the following arguments:

| Name               | Type                 | Required | Description                                                                                                                                                                     |
| :----------------- | :------------------- | :------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`             | `string`             | `true`   | The text or value that is to be copied                                                                                                                                          |
| `optionsOrTimeout` | `number` or `object` | `false`  | The timeout as a `number` or an `object` containing 2 properties: `timeout` and `format` for the MIME type. The timeout is measured in milliseconds and has a default of 1500ms |

**Return Value**

The `useClipboard` hook returns an object with the following fields:
| Name | Type | Default | Description |
| :----------------- | :------------------- | :------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value` | `string` | | The copied value|
| `setValue` | `function` | | State action to change the copied value|
| `onCopy` | `function` | | Callback function to copy content|
| `hasCopied` | `boolean` | `false` | If `true`, the content has been copied within the last `timeout` milliseconds. That is, it is set to `true` right after `onCopy` is called, and `false` after `timeout` has passed |

```tsx
import { useClipboard } from "@ricardocosta/hooks";

function Example() {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
    <>
      <Flex mb={2}>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          mr={2}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable>
    </>
  );
}
```

[🔗 ChakraUI useClipboard](https://chakra-ui.com/docs/hooks/use-clipboard)

### useConst

`useConst` is a custom hook used to initialize and return a constant value. Unlike `useMemo`, this will always return the same value, and if the initializer is a function, only call it once.

**Parameters**

The hook `useConst` accepts the initial value, or a function to get the initial value.

**Return Value**

The `useConst` hook returns the value that was passed.

```tsx
import { useConst } from "@ricardocosta/hooks";

function Example() {
  const mountTime = useConst(() => new Date().toTimeString());
  const obj = useConst({ a: Math.random() });

  return (
    <>
      <p>Mount time: {mountTime}</p>
      <p>Value from constant object: {obj.a}</p>
    </>
  );
}
```

**Why not use `useMemo`?**

The React documentation says that the engine may choose to “forget” some previously memoized values and recalculate them on next render, and you should write your code so that it still works without `useMemo` and then add it to optimize performance.

You should use `useMemo` only when you need to recalculate the value based on dependencies.

**Why not use `useState`?**

This will work as a constant, but this is semantically wrong and it's expensive due to reducer handling which we don't need.

```tsx
function Example() {
  const [value] = useState(new Date().toTimeString());
  return <p>Mount time: {value}</p>;
}
```

[🔗 ChakraUI useConst](https://chakra-ui.com/docs/hooks/use-const)

### useControllable

React hook that allows any component handle [controlled](https://reactjs.org/docs/forms.html#controlled-components) and [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) modes, and provide control over its internal state.

Most components use the `useControllableState` for seamlessly managing both controlled or uncontrolled state scenarios.

**`useControllableProp`**

Given a prop value and state value, the `useControllableProp` hook is used to determine whether a component is controlled or uncontrolled, and also returns the computed value.

- It returns the prop value if the component is controlled
- It returns the state value if the component is uncontrolled

```tsx
import { useControllableProp } from "@ricardocosta/hooks";

const [isControlled, value] = useControllableProp(propValue, stateValue);
```

**`useControllableState`**

The `useControllableState` hook returns the state and function that updates the state, just like `React.useState` does.

With `useControllableState`, you can pass an initial state (using `defaultValue`) implying the component is uncontrolled, or you can pass a controlled `value` (using value) implying the component is controlled.

```tsx
import { useControllableState } from "@ricardocosta/hooks";

function ExampleUncontrolled() {
  const [value, setValue] = useControllableState({ defaultValue: 40 });

  return (
    <div>
      <Button onClick={() => setValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {value}
      </Box>
      <Button onClick={() => setValue(value - 1)}>-</Button>
    </div>
  );
}

function ExampleControlled() {
  // you need a state and updater to change the value
  const [value, setValue] = React.useState(40);

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });

  return (
    <div>
      <Button onClick={() => setInternalValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {internalValue}
      </Box>
      <Button onClick={() => setInternalValue(value - 1)}>-</Button>
    </div>
  );
}
```

[🔗 ChakraUI useControllable](https://chakra-ui.com/docs/hooks/use-controllable)

### useDimensions

`useDimensions` is a custom hook that measures dimensions of the referenced element based on its box-model.

**Parameters**

| Parameter            | Type                     | Description                                                                                                               |
| :------------------- | :----------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| `ref`                | `RefObject<HTMLElement>` | Reference to the element you want to measure                                                                              |
| `observe (optional)` | `boolean`                | If set to `true`, the `resize` and `scroll` events will be attached to the window and update the dimensions on each event |

**Return Value**

This hook returns an object with the properties `marginBox`, `paddingBox`, `borderBox`, `contentBox`, `border`, `padding`, and `margin`.

Each of these properties contains a nested object which provides values respective to that property:

| Value        | Content                                                                            |
| :----------- | :--------------------------------------------------------------------------------- |
| `marginBox`  | `top`, `right`, `bottom`, `left`, `width`, `height`, `x`, `y`, `center` (`x`, `y`) |
| `borderBox`  | `top`, `right`, `bottom`, `left`, `width`, `height`, `x`, `y`, `center` (`x`, `y`) |
| `paddingBox` | `top`, `right`, `bottom`, `left`, `width`, `height`, `x`, `y`, `center` (`x`, `y`) |
| `contentBox` | `top`, `right`, `bottom`, `left`, `width`, `height`, `x`, `y`, `center` (`x`, `y`) |
| `border`     | `top`, `right`, `bottom`, `left`                                                   |
| `padding`    | `top`, `right`, `bottom`, `left`                                                   |
| `margin`     | `top`, `right`, `bottom`, `left`                                                   |

```tsx
import { useDimensions } from "@ricardocosta/hooks";

function Example() {
  const elementRef = useRef();
  const dimensions = useDimensions(elementRef);

  return (
    <Box ref={elementRef} color="white" width="fit-content" bg="blue.700" p={4}>
      <Heading>
        <code>borderBox</code> dimensions
      </Heading>
      <List>
        <ListItem>The Width: {dimensions && dimensions.borderBox.width}</ListItem>
        <ListItem>The x coordinate: {dimensions && dimensions.borderBox.x}</ListItem>
      </List>
    </Box>
  );
}
```

[🔗 ChakraUI useDimensions](https://chakra-ui.com/docs/hooks/use-dimensions)

### useDisclosure

`useDisclosure` is a custom hook used to help handle common `open`, `close`, or `toggle` scenarios. It can be used to control feedback component such as `Modal`, `AlertDialog`, `Drawer`, etc.

**Parameters**

The `useDisclosure` hook accepts an optional object with the following properties:

| Parameter       | Type         |
| :-------------- | :----------- |
| `defaultIsOpen` | `boolean`    |
| `id`            | `string`     |
| `isOpen`        | `boolean`    |
| `onClose`       | `() => void` |
| `onOpen`        | `() => void` |

**Return Value**

The `useDisclosure` hook returns an object with the following fields:

| Value                | Type       | Default | Description                                                                              |
| :------------------- | :--------- | :------ | :--------------------------------------------------------------------------------------- |
| `isOpen`             | `boolean`  | `false` | If `true`, it sets the controlled component to its visible state                         |
| `onClose`            | `function` |         | Callback function to set a falsy value for the `isOpen` parameter                        |
| `onOpen`             | `function` |         | Callback function to set a truthy value for the `isOpen` parameter                       |
| `onToggle`           | `function` |         | Callback function to toggle the value of the `isOpen` parameter                          |
| `getDisclosureProps` | `function` |         | Callback function to retrieve a set of props for the controlled component                |
| `getButtonProps`     | `function` |         | Callback function to retrieve a set of props for the button that triggers the disclosure |

```tsx
import { useDisclosure } from "@ricardocosta/hooks";

function Example() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
```

Using the `getDisclosureProps` and `getButtonProps` methods returned by the hook provides the needed attributes and handlers to the respective component and button for visibility toggling and accessibility.

The component that uses `getDisclosureProps` receives the following props:

- An `id` (can optionally pass this in as a prop to the hook to render a custom value).
- A dynamically rendered `hidden` attribute.

`getDisclosureProps` can directly accept any additional props for the component.

The button that uses `getButtonProps` for toggling receives the following props:

- A dynamically rendered `aria-expanded` attribute to let a screen reader know whether the disclosure component is visible.
- The `aria-controls` attribute using the `id` (can optionally pass `id` in as a prop to the hook to render a custom value). This lets a screen reader know which component is controlled by the button.
- An `onClick` handler that uses the `onToggle` callback along with any other click events passed as an `onClick` prop to `getButtonProps`

`getButtonProps` can also directly accept any additional props for the button.

```tsx
import { useDisclosure } from "@ricardocosta/hooks";

function Basic() {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <>
      <Button {...buttonProps}>Toggle Me</Button>
      <Text {...disclosureProps} mt={4}>
        This text is being visibly toggled hidden and shown by the button.
        <br />
        (Inspect these components to see the rendered attributes)
      </Text>
    </>
  );
}
```

[🔗 ChakraUI useDisclosure](https://chakra-ui.com/docs/hooks/use-disclosure)

### useMediaQuery

`useMediaQuery` is a custom hook used to help detect whether a single media query or multiple media queries individually match. More information about the API in the [MDN page](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

**Parameters**

The `useMediaQuery` hook accepts a single media query or an array of media queries, and optionally an object that contains an `ssr` boolean and a `fallback` string.

**Return Value**

The `useMediaQuery` hook returns an array of booleans, indicating whether the given query matches or queries match.

Why an array? `useMediaQuery` accepts both a string and an array of strings, but will always return an array. This way, you can combine multiple media queries which will be individually matched in a single call.

⚠️ Keep in mind this API relies on the users browser support of `window.matchMedia` and will always return `false` if it is not supported or does not exist (e.g. during serverside rendering).

```tsx
import { useMediaQuery } from "@ricardocosta/hooks";

function Example() {
  const [isLargerThan1280, isDisplayingInBrowser] = useMediaQuery([
    "(min-width: 1280px)",
    "(display-mode: browser)",
  ]);

  return <Text>{isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}</Text>;
}
```

[🔗 ChakraUI useMediaQuery](https://chakra-ui.com/docs/hooks/use-media-query)

### useMergeRefs

`useMergeRefs` is a custom hook used to merge several react refs into a single one.

**Return Value**

The `useMergeRefs` hook returns a function that receives the element and assign the value to the given React refs.

```tsx
import { useMergeRefs } from "@ricardocosta/hooks";

function ExampleMultipleRefs({ ref, ...props }) {
  const internalRef = React.useRef();
  const refs = useMergeRefs(internalRef, ref);

  return (
    <div {...props} ref={refs}>
      A div with multiple refs.
    </div>
  );
}

function ExampleCombiningHooks({ ref, ...props }) {
  const outsideRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { popperRef, referenceRef } = usePopper();

  useOutsideClick({
    ref: outsideRef,
    handler: () => isOpen && onClose(),
  });

  const buttonEl = useMergeRefs(outsideRef, referenceRef);

  return (
    <>
      <button ref={buttonEl} onClick={onOpen}>
        Click me to see the popover
      </button>
      {isOpen && (
        <Box ref={popperRef} bg="green">
          Click outside to close me
        </Box>
      )}
    </>
  );
}
```

[🔗 ChakraUI useMergeRefs](https://chakra-ui.com/docs/hooks/use-merge-refs)

### useOutsideClick

`useOutsideClick` is a custom hook that handles click events outside a specific DOM element, like a `div`. A handler is invoked when a click or touch event happens outside the referenced element. This hook is compatible with mouse and touch events.

**Parameters**

The `useOutsideClick` hook accepts an object with the following properties:

| Parameter | Type                                | Description                                                               |
| :-------- | :---------------------------------- | :------------------------------------------------------------------------ |
| `ref`     | `RefObject<HTMLElement>` (required) | The reference to a DOM element                                            |
| `enabled` | `boolean`                           | Whether the hook is enabled                                               |
| `handler` | `(e: Event) => void`                | Function invoked when a click is triggered outside the referenced element |

```tsx
import { useOutsideClick } from "@ricardocosta/hooks";

function Example() {
  const ref = React.useRef();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isModalOpen ? (
        <div ref={ref}>👋 Hey, I'm a modal. Click anywhere outside of me to close.</div>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
    </>
  );
}
```

[🔗 ChakraUI useOutsideClick](https://chakra-ui.com/docs/hooks/use-outside-click)

### usePrefersReducedMotion

`usePrefersReducedMotion` is a custom hook used to help detect the users motion preference. More information about the API in the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

**Return Value**

The `usePrefersReducedMotion` hook returns a boolean, indicating whether the user prefers reduced motion.

```tsx
import { usePrefersReducedMotion } from "@ricardocosta/hooks";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function Example() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${spin} infinite 20s linear`;

  return <Image animation={animation} src={logo} {...props} />;
}
```

[🔗 ChakraUI usePrefersReducedMotion](https://chakra-ui.com/docs/hooks/use-prefers-reduced-motion)

### useTheme

`useTheme` is a custom hook used to get the theme object from context.

**Return Value**

The `useTheme` hook returns the theme object.

```tsx
import { useTheme } from "@ricardocosta/hooks";

function Example() {
  const theme = useTheme();

  return <div>{/* Do something with the theme */}</div>;
}
```

[🔗 ChakraUI useTheme](https://chakra-ui.com/docs/hooks/use-theme)

### useToken

`useToken` is a custom hook used to resolve design tokens from the theme.

**Return Value**

The `useToken` hook retrieves whatever is in the theme at the given path(s).

```tsx
import { useToken } from "@ricardocosta/hooks";

function Example() {
  const [red100, blue200] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["red.100", "blue.200"]
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <Box p={4} boxShadow={`inset 0 4px 0 ${red100}, 0 0 8px ${blue200}`}>
      You can utilize <Code>useToken</Code> to create a <Code>boxShadow</Code> with colors from your
      theme.
    </Box>
  );
}
```

[🔗 ChakraUI useToken](https://chakra-ui.com/docs/hooks/use-token)
