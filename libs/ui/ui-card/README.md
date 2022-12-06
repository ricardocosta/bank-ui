# Card

Wrapper for [`@chakra-ui/card`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/card) package.

## Usage

`Card` is a flexible component used to group and display content in a clear and concise format.

```tsx
import { Card, CardBody, CardFooter, CardHeader } from "@ricardocosta/ui-card";

// Basic usage
<Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>;

// With divider
<Card>
  <CardHeader>
    <Heading size="md">Client Report</Heading>
  </CardHeader>
  <CardBody>
    <Stack divider={<StackDivider />} spacing="4">
      <Box>
        <Heading size="xs" textTransform="uppercase">
          Summary
        </Heading>
        <Text pt="2" fontSize="sm">
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size="xs" textTransform="uppercase">
          Overview
        </Heading>
        <Text pt="2" fontSize="sm">
          Check out the overview of your clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
  <CardFooter>
    <Button>View here</Button>
  </CardFooter>
</Card>;
```

[🔗 ChakraUI Card](https://chakra-ui.com/docs/components/card)
