# Toggle

Wrapper for [`@chakra-ui/switch`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/switch) package.

## Usage

The `Toggle` component is used as an alternative for the `Checkbox` component. You can switch between enabled or disabled states.
`Toggle` must always be accompanied by a label, and follows the same keyboard workflow as a `Checkbox`.

```tsx
import { Toggle } from "@ricardocosta/ui-toggle";

<FormControl display="flex" alignItems="center">
  <FormLabel htmlFor="email-alerts" mb="0">
    Enable email alerts?
  </FormLabel>
  <Toggle id="email-alerts" />
</FormControl>;
```

[🔗 ChakraUI Switch](https://chakra-ui.com/docs/components/switch)
