# Menu

Wrapper for [`@chakra-ui/menu`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/menu) package.

## Usage

An accessible dropdown menu for the common dropdown menu button design pattern. `Menu` uses roving `tabIndex` for focus management.

- `Menu`: The wrapper component provides context, state, and focus management.
- `MenuList`: The wrapper for the menu items. Must be a direct child of `Menu`.
- `MenuButton`: The trigger for the menu list. Must be a direct child of `Menu`.
- `MenuItem`: The trigger that handles menu selection. Must be a direct child of a `MenuList`.
- `MenuGroup`: A wrapper to group related menu items.
- `MenuDivider`: A visual separator for menu items and groups.
- `MenuOptionGroup`: A wrapper for checkable menu items (radio and checkbox).
- `MenuItemOption`: The checkable menu item, to be used with `MenuOptionGroup`.

```tsx
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@ricardocosta/ui-menu";

// Basic Usage
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>;

// You can compose a menu for table headers to help with sorting and filtering options.
// Use the MenuOptionGroup and MenuItemOption components.
<Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme="blue">
    MenuItem
  </MenuButton>
  <MenuList minWidth="240px">
    <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
      <MenuItemOption value="asc">Ascending</MenuItemOption>
      <MenuItemOption value="desc">Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title="Country" type="checkbox">
      <MenuItemOption value="email">Email</MenuItemOption>
      <MenuItemOption value="phone">Phone</MenuItemOption>
      <MenuItemOption value="country">Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>;
```

[🔗 ChakraUI Menu](https://chakra-ui.com/docs/components/menu)
