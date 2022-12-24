# Image

Wrapper for [`@chakra-ui/image`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/image) package.

## Usage

The Image component is used to display images with support for fallback.

The `Image` component allows you provide a fallback placeholder. The placeholder is displayed when:

- The `fallback` or `fallbackSrc` prop is provided
- The image provided in `src` is currently loading
- An error occurred while loading the image `src`
- No `src` prop was passed

You can also opt out of this behavior by passing the ignoreFallback prop.

```tsx
import { Image } from "@ricardocosta/ui-image";

// Basic usage
<Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />;

// With boarder radius
<Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>

// Fallback
<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />;
```

[🔗 ChakraUI Image](https://chakra-ui.com/docs/components/image)
