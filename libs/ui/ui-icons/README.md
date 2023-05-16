# Icons

Wrapper for [`@chakra-ui/icons`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/icons) package.

## Usage

There are multiple ways to use icons:

- Using Chakra UI icon library
- Using a third-party icon library
- Creating your own icons

⚠️ Avoid passing `onClick` handlers to the `Icon` component. If you need a clickable icon, use the `IconButton` instead.

To use third-party icon libraries like `@emotion-icons/remix-fill`, here are the steps:

1. Import the `Icon` component from `@ricardocosta/ui-icons`
2. Pass the desired third party icon into the `as` prop

```tsx
import { Dashboard } from "@emotion-icons/remix-fill";
import { Icon, PhoneIcon } from "@ricardocosta/ui-icons";

// Basic usage with ChakraUI icons
<PhoneIcon />;

// With @emotion-icons/remix-fill
<Icon as={Dashboard} />;
```

[🔗 ChakraUI Icon](https://chakra-ui.com/docs/components/icon)
