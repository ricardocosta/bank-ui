# Table

Wrapper for [`@chakra-ui/table`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/table) package.

## Usage

`Table` component is used to organize and display data efficiently. It renders a `<table>` element by default.

The `TableContainer` component renders a `div` that wraps the table component to not allow the table to overflow the parent container, not allow data content to break lines without exception, and enable horizontal scrolling.

```tsx
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@ricardocosta/ui-table";

<TableContainer>
  <Table variant="simple">
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>;
```

[🔗 ChakraUI Table](https://chakra-ui.com/docs/components/table)
