# Media Query

Wrapper for [`@chakra-ui/media-query`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/media-query) package.

## Usage

Show and Hide wrapper components render or not render the child elements if the media query matches.

- `Show`: Show the children if the media query matches.
- `Hide`: Hide the children if the media query matches.

```tsx
import { Hide, Show } from "@ricardocosta/ui-media-query";

<>
  <Show above="sm">
    <Box>This text appears at the "sm" value screen width or greater.</Box>
  </Show>
  <Hide below="md">
    <Box>This text hides at the "md" value screen width and smaller.</Box>
  </Hide>
</>;

// Use the breakpoint prop to pass in a custom query.
<Show breakpoint="(max-width: 400px)">
  <Box>This text appears only on screens 400px and smaller.</Box>
</Show>;
```

[🔗 ChakraUI Media Query](https://chakra-ui.com/docs/components/media-query)
