# Radio

Wrapper for [`@chakra-ui/radio`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/radio) package.

## Usage

Radios are used when only one choice may be selected in a series of options.

In some cases, you might need to create components that work like radios but don't look like radios. Chakra exports useRadio, and useRadioGroup hooks to help with this scenario. Here's what you need to do:

1. Create a component that consumes the useRadio hook.
1. Use the useRadioGroup hook to control a group of custom radios.

```tsx
import { Radio, RadioGroup } from "@ricardocosta/ui-radio";

// Basic usage
function RadioExample() {
  const [value, setValue] = React.useState("1");
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
}

// Custom radios
// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function Example() {
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

render(<Example />);
```

[🔗 ChakraUI Radio](https://chakra-ui.com/docs/components/radio)
