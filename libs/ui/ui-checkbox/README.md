# Checkbox

Wrapper for [`@chakra-ui/checkbox`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/checkbox) package.

## Usage

`Checkbox` component is used in forms when a user needs to select multiple values from several options.

```tsx
import { Checkbox, CheckboxGroup } from "@ricardocosta/ui-checkbox";

// Basic usage
<Checkbox defaultChecked>Checkbox</Checkbox>;

// Disabled
<Checkbox isDisabled>Checkbox</Checkbox>;
<Checkbox isDisabled defaultChecked>
  Checkbox
</Checkbox>;

// Grouping
<CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
  <Stack spacing={[1, 5]} direction={["column", "row"]}>
    <Checkbox value="naruto">Naruto</Checkbox>
    <Checkbox value="sasuke">Sasuke</Checkbox>
    <Checkbox value="kakashi">Kakashi</Checkbox>
  </Stack>
</CheckboxGroup>;
```

[🔗 ChakraUI Checkbox](https://chakra-ui.com/docs/components/checkbox)
