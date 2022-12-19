# Accordion

Wrapper for [`@chakra-ui/accordion`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/accordion) package.

## Usage

Accordions display a list of high-level options that can expand/collapse to reveal more information.

- `Accordion`: The wrapper that uses cloneElement to pass props to `AccordionItem` children.
- `AccordionItem`: A single accordion item.
- `AccordionButton`: The button that toggles the expand/collapse state of the accordion item. This button must be wrapped in an element with role `heading`.
- `AccordionPanel`: The container for the details to be revealed.
- `AccordionIcon`: A `chevron-down` icon that rotates based on the expanded/collapsed state

By default, only one item may be expanded and it can only be collapsed again by expanding another.

```tsx
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@ricardocosta/ui-accordion";

// Basic Usage
<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>;
```

[🔗 ChakraUI Accordion](https://chakra-ui.com/docs/components/accordion)
