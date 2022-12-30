# Progress

Wrapper for [`@chakra-ui/progress`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/progress) package.

## Usage

Progress is used to display the progress status for a task that takes a long time or consists of several steps.

You can add `hasStripe` prop to any progress bar to apply a stripe via a CSS gradient over the progress bar’s background color.

To show an animated progress, pass the `isIndeterminate` prop.

```tsx
import { Progress } from "@ricardocosta/ui-progress";

// Basic Usage
<Progress value={80} />;

// With Stripe
<Progress hasStripe value={64} />;

// With Animation
<Progress size="xs" isIndeterminate />;
```

[🔗 ChakraUI Progress](https://chakra-ui.com/docs/components/progress)
