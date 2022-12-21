# Breadcrumb

Wrapper for [`@chakra-ui/breadcrumb`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/breadcrumb) package.

## Usage

Breadcrumbs is a navigation pattern that helps users understand the hierarchy of a website.

- `Breadcrumb`: The parent container for breadcrumbs.
- `BreadcrumbItem`: Individual breadcrumb element containing a link and a divider.
- `BreadcrumbLink`: The breadcrumb link.
- `BreadcrumbSeparator`: The visual separator between each breadcrumb.

Add `isCurrentPage` prop to the `BreadcrumbItem` that matches the current path. When this prop is present, the `BreadcrumbLink` renders a span with `aria-current` set to `page` instead of an anchor element.

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@ricardocosta/ui-breadcrumb";

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>;

// Change the separator used in the breadcrumb by passing a string, like - or an icon
<Breadcrumb separator="-">{/* Implement breadcrumb items */}</Breadcrumb>;

// Using an icon as the separator
<Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
  {/* Implement breadcrumb items */}
</Breadcrumb>;
```

[🔗 ChakraUI Breadcrumb](https://chakra-ui.com/docs/components/breadcrumb)
