# Input

Wrapper for [`@chakra-ui/input`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/input) package.

## Usage

### Input

`Input` component is a component that is used to get user input in a text field.

The `Input` component comes in 4 variants: `outline`, `unstyled`, `flushed`, and `filled`. Pass the `variant` prop and set it to one of these values.

```tsx
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from "@ricardocosta/ui-input";

// Basic usage
<Input placeholder="Basic usage" />;

// Sizes
<Stack spacing={3}>
  <Input placeholder="extra small size" size="xs" />
  <Input placeholder="small size" size="sm" />
  <Input placeholder="medium size" size="md" />
  <Input placeholder="large size" size="lg" />
</Stack>;

// Variants
<Stack spacing={3}>
  <Input variant="outline" placeholder="Outline" />
  <Input variant="filled" placeholder="Filled" />
  <Input variant="flushed" placeholder="Flushed" />
  <Input variant="unstyled" placeholder="Unstyled" />
</Stack>;

// Left and Right Addons
<InputGroup size="sm">
  <InputLeftAddon children="https://" />
  <Input placeholder="mysite" />
  <InputRightAddon children=".com" />
</InputGroup>;
```

[🔗 ChakraUI Input](https://chakra-ui.com/docs/components/input)

### Textarea

The Textarea component allows you to easily create multi-line text inputs.

```tsx
import { Textarea } from "@chakra-ui/ui-input";

// Basic usage
<Textarea placeholder="Here is a sample placeholder" />;

// Controlled
function Example() {
  const [value, setValue] = React.useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
}
```

[🔗 ChakraUI Textarea](https://chakra-ui.com/docs/components/textarea)

### Number Input

The NumberInput component is similar to the Input component, but it has controls for incrementing or decrementing numeric values.

5 components are exported for the NumberInput.

- `NumberInput`: The wrapper that provides context and logic to the components.
- `NumberInputField`: The `input` field itself.
- `NumberInputStepper`: The wrapper for the input's stepper buttons.
- `NumberIncrementStepper`: The button to increment the value of the input.
- `NumberDecrementStepper`: The button to decrement the value of the input.

Pass the `min` prop or `max` prop to set an upper and lower limit for the input. By default, the input will restrict the value to stay within the specified range.

Pass the `step` prop to change the step size when you increment or decrement the value. By default, the value is rounded to match the number of decimals in the `step`.

In some cases, you might need the value to be rounded to specific decimal points. Simply pass the `precision` prop and set it to the number of decimal points.

```tsx
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/ui-input";

// Basic usage
<NumberInput>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>;
```

[🔗 ChakraUI Number Input](https://chakra-ui.com/docs/components/number-input)
