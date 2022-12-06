# Tooltip

Wrapper for [`@chakra-ui/tooltip`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/tooltip) package.

## Usage

A tooltip is a brief, informative message that appears when a user interacts with an element.

If the children of `Tooltip` is a `string`, we wrap with in a `span` with `tabIndex` set to `0`, to ensure it meets the accessibility requirements.

Note 🚨: If the `Tooltip` is wrapping a functional component, ensure that the functional component accepts a `ref` using `forwardRef`.

```tsx
import { Tooltip } from "@ricardocosta/ui-tooltip";

// Basic
<Tooltip label="Hey, I'm here!" aria-label="A tooltip" placement="top">
  Hover me
</Tooltip>;

// With Custom component
const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p="1">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

const CustomToolTip = () => (
  <Tooltip label="Hover me">
    <CustomCard>Tag Here</CustomCard>
  </Tooltip>
);
```

[🔗 ChakraUI Tooltip](https://chakra-ui.com/docs/components/tooltip)
