# Provider

Wrapper for [`@chakra-ui/provider`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/provider)

## Usage

```ts
// 1. import `ChakraProvider` component
import { UIProvider } from "@ricardocosta/provider";

// 2. build your theme and config
const theme = {
  // ... your system-ui theme
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
