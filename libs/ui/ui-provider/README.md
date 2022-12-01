# Provider

Wrapper for [`@chakra-ui/provider`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/provider)

## Usage

```tsx
// 1. import `ChakraProvider` component
import { UIProvider } from "@ricardocosta/ui-provider";
import { extendTheme } from "@ricardocosta/ui-theme";

// 2. build your theme and config
const theme = extendTheme();

// 3. Use at the root of your app
function App({ Component }) {
  return (
    <UIProvider theme={theme}>
      <Component />
    </UIProvider>
  );
}
```
