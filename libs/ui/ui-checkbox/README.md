# Checkbox

Wrapper for [`@chakra-ui/checkbox`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/checkbox) package.

## Usage

`Checkbox` component is used in forms when a user needs to select multiple values from several options.

```tsx
import { Checkbox, CheckboxGroup } from "@ricardocosta/ui-checkbox";

// Basic usage
<Checkbox defaultChecked>Checkbox</Checkbox>;

// Disabled
<Checkbox isDisabled>Checkbox</Checkbox>;
<Checkbox isDisabled defaultChecked>
  Checkbox
</Checkbox>;

// Grouping
<CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
  <Stack spacing={[1, 5]} direction={["column", "row"]}>
    <Checkbox value="naruto">Naruto</Checkbox>
    <Checkbox value="sasuke">Sasuke</Checkbox>
    <Checkbox value="kakashi">Kakashi</Checkbox>
  </Stack>
</CheckboxGroup>;
```

[🔗 ChakraUI Checkbox](https://chakra-ui.com/docs/components/checkbox)

### useCheckbox

`useCheckbox` is a custom hook used to provide checkbox functionality, as well as state and focus management to custom checkbox components when using it.

**Parameters**

The `useCheckbox` hook accepts an object with the following properties:

| Parameter          | Type                                                      | Description                                                                                                                                  |
| :----------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-describedby` | `boolean`                                                 | Refers to the id of the element that labels the checkbox element                                                                             |
| `aria-invalid`     | `boolean`                                                 |                                                                                                                                              |
| `aria-label`       | `string`                                                  | Defines the string that labels the checkbox element                                                                                          |
| `aria-labelledby`  | `string`                                                  | Refers to the id of the element that labels the checkbox element                                                                             |
| `defaultChecked`   | `boolean`                                                 | If `true`, the checkbox will be initially checked                                                                                            |
| `id`               | `string`                                                  | id assigned to input                                                                                                                         |
| `isChecked`        | `boolean`                                                 | If `true`, the checkbox will be checked. You'll need to pass `onChange` to update its value (since it is now controlled)                     |
| `isDisabled`       | `boolean`                                                 | If `true`, the checkbox will be disabled                                                                                                     |
| `isFocusable`      | `boolean`                                                 | If `true` and `isDisabled` is passed, the checkbox will remain tabbable but not interactive                                                  |
| `isIndeterminate`  | `boolean`                                                 | If `true`, the checkbox will be indeterminate. This only affects the icon shown inside checkbox and does not modify the `isChecked` property |
| `isInvalid`        | `boolean`                                                 | If `true`, the checkbox is marked as invalid. Changes style of unchecked state                                                               |
| `isReadOnly`       | `boolean`                                                 | If `true`, the checkbox will be readonly                                                                                                     |
| `isRequired`       | `boolean`                                                 | If `true`, the checkbox input is marked as required, and required attribute will be added                                                    |
| `name`             | `string`                                                  | The name of the input field in a checkbox (Useful for form submission)                                                                       |
| `onBlur`           | `(event: FocusEvent<HTMLInputElement, Element>) => void`  | The callback invoked when the checkbox is blurred (loses focus)                                                                              |
| `onChange`         | `(event: ChangeEvent<HTMLInputElement, Element>) => void` | The callback invoked when the checked state of the Checkbox changes                                                                          |
| `onFocus`          | `(event: FocusEvent<HTMLInputElement, Element>) => void`  | The callback invoked when the checkbox is focused                                                                                            |
| `tabIndex`         | `number`                                                  | The tab-index property of the underlying input element                                                                                       |
| `value`            | `string \| number`                                        | The value to be used in the checkbox input. This is the value that will be returned on form submission                                       |

**Return Value**

The `useCheckbox` hook returns following props:

| Value              | Type            | Description                                                                |
| :----------------- | :-------------- | :------------------------------------------------------------------------- |
| `state`            | `CheckboxState` | An object that contains all props defining the current state of a checkbox |
| `getCheckboxProps` | `PropGetter`    | A function to get the props of the checkbox                                |
| `getInputProps`    | `PropGetter`    | A function to get the props of the input field                             |
| `getLabelProps`    | `PropGetter`    | A function to get the props of the checkbox label                          |
| `htmlProps`        | `object`        | An object with all htmlProps                                               |

```tsx
import { useCheckbox } from "@ricardocosta/ui-checkbox";

const CustomCheckbox = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      maxW="36"
      bg="green.50"
      border="1px solid"
      borderColor="green.500"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>
        Click me
      </Text>
    </chakra.label>
  );
};
```

[🔗 ChakraUI useCheckbox](https://chakra-ui.com/docs/hooks/use-checkbox)

### useCheckboxGroup

`useCheckboxGroup` is a custom hook that provides all the state management logic for a group of checkboxes.

**Parameters**

The `useCheckboxGroup` hook accepts an object with the following properties:

| Parameter      | Type                                       | Description                                                                                                                       |
| :------------- | :----------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `defaultValue` | `Array<string \| number>`                  | The initial value of the checkbox group                                                                                           |
| `isDisabled`   | `boolean`                                  | If `true`, all wrapped checkbox inputs will be disabled                                                                           |
| `isNative`     | `boolean`                                  | If `true`, input elements will receive `checked` attribute instead of `isChecked`. This assumes, you're using native radio inputs |
| `onChange`     | `(value: Array<string \| number>) => void` | The callback fired when any children Checkbox is checked or unchecked                                                             |
| `value`        | `Array<string \| number>`                  | The value of the checkbox group                                                                                                   |

**Return Value**

The `useCheckbox` hook returns following props:

| Value              | Type                                       | Description                                                                                                             |
| :----------------- | :----------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `value`            | `Array<string \| number>`                  | The value of checkbox group.                                                                                            |
| `isDisabled`       | `boolean`                                  | A function to set the boolean value to false.                                                                           |
| `onChange`         | `(input: EventOrValue) => void`            | The onChange handler for the checkbox group.                                                                            |
| `setValue`         | `(state: Array<string \| number>) => void` | A function to set the value of the checkbox group.                                                                      |
| `getCheckboxProps` | `(props?: Dict) => Dict`                   | A function that takes checkbox props returns them with a onChange handler for the checkbox group and the checked state. |

```tsx
import { useCheckbox, useCheckboxGroup } from "@ricardocosta/ui-checkbox";

function Example() {
  function CustomCheckbox(props) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props);

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        maxW="40"
        bg="green.50"
        border="1px solid"
        borderColor="green.500"
        rounded="lg"
        px={3}
        py={1}
        cursor="pointer"
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="green.500"
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && <Box w={2} h={2} bg="green.500" />}
        </Flex>
        <Text color="gray.700" {...getLabelProps()}>
          Click me for {props.value}
        </Text>
      </chakra.label>
    );
  }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["2"],
  });

  return (
    <Stack>
      <Text>The selected checkboxes are: {value.sort().join(" and ")}</Text>
      <CustomCheckbox {...getCheckboxProps({ value: "1" })} />
      <CustomCheckbox {...getCheckboxProps({ value: "2" })} />
      <CustomCheckbox {...getCheckboxProps({ value: "3" })} />
    </Stack>
  );
}
```

[🔗 ChakraUI useCheckboxGroup](https://chakra-ui.com/docs/hooks/use-checkbox-group)
