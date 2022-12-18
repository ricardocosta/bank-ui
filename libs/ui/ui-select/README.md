# Select

Wrapper for [`@chakra-ui/select`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/select) package.

## Usage

`Select` component is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead.

```tsx
import { Select } from "@ricardocosta/ui-select";

// Basic Usage
<Select placeholder="Select option">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>;
```

[🔗 ChakraUI Select](https://chakra-ui.com/docs/components/select)
