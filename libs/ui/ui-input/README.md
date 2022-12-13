# Input

Wrapper for [`@chakra-ui/input`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/input) package.

## Usage

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
