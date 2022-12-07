# Tag

Wrapper for [`@chakra-ui/tag`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/tag) package.

## Usage

`Tag` component is used for items that need to be labeled, categorized, or organized using keywords that describe them.

```tsx
import { Tag, TagCloseButton, TagLabel, TagLeftIcon, TagRightIcon } from "@ricardocosta/ui-tag";

// Basic usage
<Tag>Sample Tag</Tag>;

// With icons
<Tag size={size} key={size} variant="subtle" colorScheme="cyan">
  <TagLeftIcon boxSize="12px" as={AddIcon} />
  <TagLabel>Cyan</TagLabel>
</Tag>;

<Tag size={size} key={size} variant="outline" colorScheme="blue">
  <TagLabel>Blue</TagLabel>
  <TagRightIcon as={MdSettings} />
</Tag>;

// With close button
<Tag size={size} key={size} borderRadius="full" variant="solid" colorScheme="green">
  <TagLabel>Green</TagLabel>
  <TagCloseButton />
</Tag>;

// With custom element
<Tag size="lg" colorScheme="red" borderRadius="full">
  <Avatar src="https://i.pravatar.cc/300?img=66" size="xs" name="John Smith" ml={-1} mr={2} />
  <TagLabel>Segun</TagLabel>
</Tag>;
```

[🔗 ChakraUI Stat](https://chakra-ui.com/docs/components/stat)
