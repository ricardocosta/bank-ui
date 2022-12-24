# Skip Nav

Wrapper for [`@chakra-ui/skip-nav`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/skip-nav) package.

## Usage

Skip Navigation link and destination container for screen readers and keyboard users.

Per WebAim.org on [WCAG 2.4.1 (Bypass Blocks - Level A)](https://webaim.org/standards/wcag/checklist#sc2.4.1), because the main content is not always the first section that the user encounters on a page, it is strongly recommended to include a skip link for users to be able to bypass content that is present on multiple pages. Navigation links are the most common skipped.

The `SkipNavLink` component ideally needs to be one of the first items a user encounters when they begin navigating a page after load. Therefore, it is recommended to place it as high as possible in the app.

It renders an `a` tag and automatically creates a link with an `href` attribute that will point to `SkipNavContent`.

The `SkipNavContent` component is used as a target for the link to place keyboard focus on the first piece on main content. It renders a `div` and can either be a self-closing component, or wrap the main content.

```tsx
import { SkipNavContent, SkipNavLink } from "@ricardocosta/ui-skip-nav";

<>
  {/* If you want to make it the first element the user encounters */}
  <SkipNavLink>Skip to content</SkipNavLink>
  <App />
</>;

// And inside another component, like App
<div>
  <SkipNavContent />
  {/* The main content below */}
</div>;
```

[🔗 ChakraUI Skip Nav](https://chakra-ui.com/docs/components/skip-nav)
