# Provider

Wrapper for [`@chakra-ui/theme`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme)

## Usage

```ts
// 1. import `ChakraProvider` component
import { UIProvider } from "@ricardocosta/provider";
import { baseTheme } from "@ricardocosta/ui-theme";

// 2. build your theme and config
const theme = {
  // ... your system-ui theme
  ...baseTheme,
  config: {
    useSystemColorMode: false, // or true
    initialColorMode: "light", // or "dark"
    cssVarPrefix: "chakra", // any string
  },
};

// 3. Use at the root of your app
function App({ Component }) {
  return (
    <UIProvider theme={theme}>
      <Component />
    </UIProvider>
  );
}
```
