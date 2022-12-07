# Stat

Wrapper for [`@chakra-ui/stat`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/stat) package.

## Usage

As the name implies, the `Stat` component is used to display some statistics.

```tsx
import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@ricardocosta/ui-stat";

// Basic
<Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
</Stat>;

// Grouped and with indicator
<StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type="decrease" />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>;
```

[🔗 ChakraUI Stat](https://chakra-ui.com/docs/components/stat)
