# Button

Wrapper for [`@chakra-ui/button`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/button) package.

## Usage

### Button

```tsx
import { Button, ButtonGroup } from "@ricardocosta/ui-button";

// Simple Button
<Button colorScheme="blue">Button</Button>;

// Button with Icon
<Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
  Email
</Button>;

// Grouping Buttons
<ButtonGroup variant="outline" spacing="6">
  <Button colorScheme="blue">Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>;

// Or, to have an attachment effect
<ButtonGroup size="sm" isAttached variant="outline">
  <Button>Save</Button>
  <IconButton aria-label="Add to friends" icon={<AddIcon />} />
</ButtonGroup>;
```

[🔗 ChakraUI Button](https://chakra-ui.com/docs/components/button)

### Icon Button

```tsx
import { IconButton } from "@ricardocosta/ui-button";

<IconButton aria-label="Search database" icon={<SearchIcon />} />;
```

[🔗 ChakraUI Icon Button](https://chakra-ui.com/docs/components/icon-button)
