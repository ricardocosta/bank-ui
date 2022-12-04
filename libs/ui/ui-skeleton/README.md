# Skeleton

Wrapper for [`@chakra-ui/skeleton`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/skeleton) package.

## Usage

```tsx
import { Skeleton, SkeletonCircle, SkeletonText } from '@ricardocosta/ui-skeleton'

// You can use it as a standalone component.
<Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>

// Or to wrap another component to take the same height and width.
<Skeleton>
  <div>contents wrapped</div>
  <div>will not be visible</div>
</Skeleton>


// Circle and Text Skeleton
<Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
```

[🔗 ChakraUI Skeleton](https://chakra-ui.com/docs/components/skeleton)
