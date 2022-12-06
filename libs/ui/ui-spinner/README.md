# Spinner

Wrapper for [`@chakra-ui/spinner`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/spinner) package.

## Usage

Spinners provide a visual cue that an action is processing awaiting a course of change or a result.

```tsx
import { Spinner } from "@ricardocosta/ui-spinner";

// Basic
<Spinner />

// Color
<Spinner color='red.500' />

// Sizes
<Stack direction='row' spacing={4}>
  <Spinner size='xs' />
  <Spinner size='sm' />
  <Spinner size='md' />
  <Spinner size='lg' />
  <Spinner size='xl' />
</Stack>

// Empty area color
<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
```

[🔗 ChakraUI Spinner](https://chakra-ui.com/docs/components/spinner)
