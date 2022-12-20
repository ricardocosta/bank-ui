# Tabs

Wrapper for [`@chakra-ui/tabs`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/tabs) package.

## Usage

A component that helps you build accessible tabs, by providing keyboard interactions and ARIA attributes described in the WAI-ARIA Tab Panel Design Pattern.

- `Tabs`: Provides context and state for all components
- `TabList`: Wrapper for the `Tab` components
- `Tab`: element that serves as a label for one of the tab panels and can be activated to display that panel.
- `TabPanels`: Wrapper for the `TabPanel` components
- `TabPanel`: element that contains the content associated with a tab

You can render any element within `Tabs`, but `TabList` should only have `Tab` as children, and `TabPanels` should have `TabPanel` as children.

`Tabs` expects `TabList` and `TabPanels` as children. The order doesn't matter, you can have `TabList` at the top, at the bottom, or both.

```tsx
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@ricardocosta/ui-tabs";

<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>;
```

[🔗 ChakraUI Tabs](https://chakra-ui.com/docs/components/tabs)
