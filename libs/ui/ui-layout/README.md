# Layout

Wrapper for [`@chakra-ui/layout`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/layout) package.

## Usage

### Layout

#### Aspect Ratio

`AspectRatio` component is used to embed responsive videos and maps, etc.

```tsx
import { AspectRatio } from "@ricardocosta/ui-layout";

// With an Image
<AspectRatio maxW="400px" ratio={4 / 3}>
  <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
</AspectRatio>;

// Or an iframe
<AspectRatio ratio={16 / 9}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
</AspectRatio>;
```

[🔗 ChakraUI Aspect Ratio](https://chakra-ui.com/docs/components/aspect-ratio)

#### Box

`Box` is the most abstract component on top of which all other components are built. By default, it renders a `div` element.

```tsx
import { Box } from "@ricardocosta/ui-layout";

<Box bg="tomato" w="100%" p={4} color="white">
  This is the Box
</Box>;
```

[🔗 ChakraUI Box](https://chakra-ui.com/docs/components/box)

#### Center

`Center` is a layout component that centers its child within itself.

```tsx
import { Center, Circle, Square } from "@ricardocosta/ui-layout";

// Centering the child element
<Center bg="tomato" h="100px" color="white">
  This is the Center
</Center>;

// Circle and Square are abstractions that only need the 'size' property.
<Circle size='40px' bg='tomato' color='white'>
  <PhoneIcon />
</Circle>

<Square size='40px' bg='purple.700' color='white'>
  <PhoneIcon />
</Square>
```

[🔗 ChakraUI Center](https://chakra-ui.com/docs/components/center)

#### Container

Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid. By default, the `Container` component sets the `maxWidth` of the content to 60 characters (`60ch`) but you can customize this by passing custom `maxWidth` values or changing the size tokens defined in `theme.sizes.container`.

```tsx
import { Container } from "@ricardocosta/ui-layout";

<Container>
  There are many benefits to a joint design and development system. Not only does it bring benefits
  to the design team, but it also brings benefits to engineering teams. It makes sure that our
  experiences have a consistent look and feel, not just in our design specs, but in production
</Container>;
```

[🔗 ChakraUI Container](https://chakra-ui.com/docs/components/container)

#### Flex

`Flex` is `Box` with display set to flex and comes with helpful style shorthand. It renders a `div` element. `Spacer` creates an adjustable, empty space that can be used to tune the spacing between child elements within `Flex`.

```tsx
import { Flex, Spacer } from "@ricardocosta/ui-layout";

<Flex>
  <Box p="4" bg="red.400">
    Box 1
  </Box>
  <Spacer />
  <Box p="4" bg="green.400">
    Box 2
  </Box>
</Flex>;
```

**Flex and Spacer vs Grid vs Stack**

The `Flex` and `Spacer` components, `Grid` and `HStack` treat children of different widths differently.

- In `HStack`, the children will have equal spacing between them but they won't span the entire width of the container.
- In `Grid`, the starting points of the children will be equally spaced but the gaps between them will not be equal.
- With `Flex` and `Spacer`, the children will span the entire width of the container and also have equal spacing between them.

[🔗 ChakraUI Flex](https://chakra-ui.com/docs/components/flex)

#### Grid

`Grid` is a layout for managing grid layouts. `GridItem` is used as a child of `Grid` to control the span, and start positions within the grid..

```tsx
import { Grid, GridItem } from "@ricardocosta/ui-layout";

<Grid templateColumns="repeat(5, 1fr)" gap={6}>
  <GridItem w="100%" h="10" bg="blue.500" />
  <GridItem w="100%" h="10" bg="blue.500" />
  <GridItem w="100%" h="10" bg="blue.500" />
  <GridItem w="100%" h="10" bg="blue.500" />
  <GridItem w="100%" h="10" bg="blue.500" />
</Grid>;
```

[🔗 ChakraUI Grid](https://chakra-ui.com/docs/components/grid)

#### SimpleGrid

`SimpleGrid` provides a friendly interface to create responsive grid layouts with ease.

```tsx
import { SimpleGrid } from "@ricardocosta/ui-layout";

<SimpleGrid columns={2} spacing={10}>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>;
```

[🔗 ChakraUI Simple Grid](https://chakra-ui.com/docs/components/simple-grid)

#### Stack

`Stack` is a layout component used to group elements together and apply a space between them.

- `VStack`: used to stack elements in the vertical direction
- `HStack`: used to stack elements in the horizontal direction
- `Stack`: used to stack elements in the vertical or horizontal direction

```tsx
import { HStack, Stack, VStack } from "@ricardocosta/ui-layout";

<HStack spacing="24px">
  <Box w="40px" h="40px" bg="yellow.200">
    1
  </Box>
  <Box w="40px" h="40px" bg="tomato">
    2
  </Box>
  <Box w="40px" h="40px" bg="pink.100">
    3
  </Box>
</HStack>;
```

**Notes on Stack vs Flex**

The `Stack` component and the `Flex` component have their children spaced out evenly but the key difference is that the `Stack` won't span the entire width of the container whereas the `Flex` will. Another thing to note is that the items in both `Stack` and `Flex` are aligned in the center by default.

[🔗 ChakraUI Stack](https://chakra-ui.com/docs/components/stack)

#### Wrap

`Wrap` is a layout component used to add space between elements and wraps automatically if there isn't enough space.

- `Wrap` composes the `Box` component and renders a `<ul>` tag
- `WrapItem` composes the `Box` component and renders the HTML `<li>` tag

Think of `Wrap` component as a flex box container with `flex-wrap` and `spacing` support. It works really well with things like dialog buttons, tags, and chips.

In the example below, you see that the last `Box` wrapped to the next line.

```tsx
import { Wrap, WrapItem } from "@ricardocosta/ui-layout";

<Wrap>
  <WrapItem>
    <Center w="180px" h="80px" bg="red.200">
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="green.200">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="tomato">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="blue.200">
      Box 4
    </Center>
  </WrapItem>
</Wrap>;
```

[🔗 ChakraUI Wrap](https://chakra-ui.com/docs/components/wrap)

### Data Display

#### Badge

Badges are used to highlight an item's status for quick recognition.

```tsx
import { Badge } from "@ricardocosta/ui-layout";

// Basic usage
<Badge>Default</Badge>

// Composing with Text
<Text fontWeight='bold'>
  John Smith
  <Badge ml='1' colorScheme='green'>
    Frontend Engineer
  </Badge>
</Text>
```

[🔗 ChakraUI Badge](https://chakra-ui.com/docs/components/badge)

#### Code

`Code` is a component used to display inline code. It is composed from the `Box` component with a font family of `mono` for displaying code.

```tsx
import { Code } from "@ricardocosta/ui-layout";

<Code>Hello world</Code>;
```

[🔗 ChakraUI Code](https://chakra-ui.com/docs/components/code)

#### Divider

Dividers are used to visually separate content in a list or group.

```tsx
import { Divider } from "@ricardocosta/ui-layout";

// Horizontal
<Divider />

// Vertical - make sure that the parent element is assigned a height.
<Center height='50px'>
  <Divider orientation='vertical' />
</Center>
```

[🔗 ChakraUI Divider](https://chakra-ui.com/docs/components/divider)

#### Keyboard Key

The `Keyboard Key` component exists to show which key or combination of keys performs a given action.

**Guideline**

All shortcuts should do their best to match what appears on the user’s keyboard.

- All single letters A-Z are uppercase.
- For non-letter keys such as enter, esc and shift, stick to lowercase.
- Use the arrow symbol as opposed to spelling things out.

```tsx
import { Kbd } from "@ricardocosta/ui-layout";

<span>
  <Kbd>shift</Kbd> + <Kbd>H</Kbd>
</span>;
```

[🔗 ChakraUI Keyboard Key](https://chakra-ui.com/docs/components/kbd)

#### List

`List` is used to display list items. It renders a `<ul>` element by default.

```tsx
import { List, ListIcon, ListItem, OrderedList, UnorderedList } from "@ricardocosta/ui-layout";

// Unordered
<UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
</UnorderedList>

// Ordered
<OrderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
</OrderedList>

// Unstyled with icon
<List spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
</List>
```

[🔗 ChakraUI List](https://chakra-ui.com/docs/components/list)

### Typography

#### Text

`Text` is the used to render text and paragraphs within an interface.

```tsx
import { Text } from "@ricardocosta/ui-layout";

// Different sizes
<Stack spacing={3}>
  <Text fontSize="6xl">(6xl) In love with React & Next</Text>
  <Text fontSize="5xl">(5xl) In love with React & Next</Text>
  <Text fontSize="4xl">(4xl) In love with React & Next</Text>
  <Text fontSize="3xl">(3xl) In love with React & Next</Text>
  <Text fontSize="2xl">(2xl) In love with React & Next</Text>
  <Text fontSize="xl">(xl) In love with React & Next</Text>
  <Text fontSize="lg">(lg) In love with React & Next</Text>
  <Text fontSize="md">(md) In love with React & Next</Text>
  <Text fontSize="sm">(sm) In love with React & Next</Text>
  <Text fontSize="xs">(xs) In love with React & Next</Text>
</Stack>;

// Truncating
<Text noOfLines={1}>
  "The quick brown fox jumps over the lazy dog" is an English-language pangram—a sentence that
  contains all of the letters of the English alphabet. Owing to its existence, Chakra was created.
</Text>;
```

[🔗 ChakraUI Text](https://chakra-ui.com/docs/components/text)

#### Heading

`Heading` is used to render semantic HTML heading elements.

```tsx
import { Heading } from "@ricardocosta/ui-layout";

// Basic
<Heading>I'm a Heading</Heading>;

// With size and truncating
<Heading as="h1" size="4xl" noOfLines={1}>
  (4xl) In love with React & Next
</Heading>;
```

[🔗 ChakraUI Heading](https://chakra-ui.com/docs/components/heading)

#### Highlight

`Highlight` allows you to highlight substrings of a text.

```tsx
import { Highlight } from "@ricardocosta/ui-layout";

// Highlight a word
<Highlight query="spotlight" styles={{ px: "1", py: "1", bg: "orange.100" }}>
  With the Highlight component, you can spotlight words.
</Highlight>;

// Highlight multiple words
<Heading lineHeight="tall">
  <Highlight
    query={["spotlight", "emphasize", "Accentuate"]}
    styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
  >
    With the Highlight component, you can spotlight, emphasize and accentuate words.
  </Highlight>
</Heading>;
```

[🔗 ChakraUI Highlight](https://chakra-ui.com/docs/components/highlight)

### Navigation

#### Link

`Link` is an accessible element for navigation.

```tsx
import { Link } from "@ricardocosta/ui-layout";
import { Link as ReactRouterLink } from "react-router-dom";

<Link>Chakra UI</Link>;

// Usage with Routing Library
<Link as={ReactRouterLink} to="/home">
  Home
</Link>;
```

[🔗 ChakraUI Link](https://chakra-ui.com/docs/components/link)

#### Link Overlay

`LinkOverlay` is a semantic component used to wrap elements (cards, blog post, articles, etc.) in a link.

When you need to link an entire component or card, it can be tempting to wrap it within `<a href="...">` and think you're done. This is considered unsemantic and incorrect because the component or card could contain other clickable elements or links (tags, timestamps, buttons).

The `LinkOverlay` component aims to solve this by overlaying one link on top of the component or card, and then elevating the remaining links on top of it.

One of the side-effects for this technique is that the content can't be "selectable" (i.e with a pointing device), however this seems to be pretty trivial compared to the benefits!

```tsx
import { LinkBox, LinkOverlay } from "@ricardocosta/ui-layout";

<LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
  <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
    13 days ago
  </Box>
  <Heading size="md" my="2">
    <LinkOverlay href="#">New Year, New Beginnings: Smashing Workshops & Audits</LinkOverlay>
  </Heading>
  <Text>
    Catch up on what’s been cookin’ at Smashing and explore some of the most popular community
    resources.
  </Text>
</LinkBox>;
```

[🔗 ChakraUI LinkOverlay](https://chakra-ui.com/docs/components/link-overlay)
