# Alert

Wrapper for [`@chakra-ui/alert`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/alert) package.

## Usage

Alerts are used to communicate a state that affects a system, feature or page.

4 components are exported:
`Alert`: The wrapper for alert components.
`AlertIcon`: The visual icon for the alert that changes based on the `status` prop.
`AlertTitle`: The title of the alert to be announced by screen readers.
`AlertDescription`: The description of the alert to be announced by screen readers.

Change the status of the alerts by passing the `status` prop. This affects the color scheme and icon used. Alert supports `error`, `success`, `warning`, and `info` statuses.

`Alert` has 4 variant styles you can use. Pass the `variant` prop and use either `subtle`, `solid`, `left-accent` or `top-accent`.

```tsx
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@ricardocosta/ui-alert";

<Alert status="error">
  <AlertIcon />
  <AlertTitle>Your browser is outdated!</AlertTitle>
  <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
</Alert>;

<Stack spacing={3}>
  <Alert status="success" variant="subtle">
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status="success" variant="solid">
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status="success" variant="left-accent">
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status="success" variant="top-accent">
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>
</Stack>;
```

[🔗 ChakraUI Alert](https://chakra-ui.com/docs/components/alert)
