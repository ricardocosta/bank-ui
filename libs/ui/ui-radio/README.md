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

### useRadio

`useRadio` is a custom hook used to provide radio functionality, as well as state and focus management to custom radio components when using it.

**Parameters**

The `useRadio` hook accepts an object with the following properties:

| Parameter          | Type                                                      | Description                                                                                                           |
| :----------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `aria-describedby` | `boolean`                                                 | Refers to the id of the element that labels the radio element                                                         |
| `defaultChecked`   | `boolean`                                                 | If `true`, the radio will be initially checked                                                                        |
| `id`               | `string`                                                  | id assigned to input                                                                                                  |
| `isChecked`        | `boolean`                                                 | If `true`, the radio will be checked. You'll need to pass `onChange` to update its value (since it is now controlled) |
| `isDisabled`       | `boolean`                                                 | If `true`, the radio will be disabled                                                                                 |
| `isFocusable`      | `boolean`                                                 | If `true` and `isDisabled` is passed, the radio will remain tabbable but not interactive                              |
| `isInvalid`        | `boolean`                                                 | If `true`, the radio button will be invalid. This also sets `aria-invalid` to `true`                                  |
| `isReadOnly`       | `boolean`                                                 | If `true`, the radio will be readonly                                                                                 |
| `isRequired`       | `boolean`                                                 | If `true`, the radio button will be required. This also sets `aria-required` to `true`                                |
| `name`             | `string`                                                  | The name of the input field in a radio (Useful for form submission)                                                   |
| `onChange`         | `(event: ChangeEvent<HTMLInputElement, Element>) => void` | Function called when checked state of the `input` changes                                                             |
| `value`            | `string`                                                  | The value to be used in the radio button. This is the value that will be returned on form submission                  |

**Return Value**

The `useRadio` hook returns following props:

| Value              | Type         | Description                                                             |
| :----------------- | :----------- | :---------------------------------------------------------------------- |
| `state`            | `RadioState` | An object that contains all props defining the current state of a radio |
| `getCheckboxProps` | `PropGetter` | A function to get the props of the radio                                |
| `getInputProps`    | `PropGetter` | A function to get the props of the input field                          |
| `getLabelProps`    | `PropGetter` | A function to get the props of the radio label                          |
| `getRootProps`     | `PropGetter` | A function to get the props of the radio root                           |
| `htmlProps`        | `object`     | An object with all htmlProps                                            |

```tsx
import { useRadio } from "@ricardocosta/ui-radio";

function Example() {
  const CustomRadio = (props) => {
    const { image, ...radioProps } = props
    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          {...getCheckboxProps()}
          bg={state.isChecked ? 'green.200' : 'transparent'}
          w={12}
          p={1}
          rounded='full'
        >
          <Image src={image} rounded='full' {...getLabelProps()} />
        </Box>
      </chakra.label>
    )
  }

  return (
    <div>
      <CustomRadio image={'https://randomuser.me/api/portraits/men/86.jpg'} />
    </div>
  )
```

[🔗 ChakraUI useRadio](https://chakra-ui.com/docs/hooks/use-radio)

### useRadioGroup

`useRadioGroup` is a custom hook that provides all the state management logic for a group of radios.

**Parameters**

The `useRadioGroup` hook accepts an object with the following properties:

| Parameter      | Type                          | Description                                                                                                                       |
| :------------- | :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `defaultValue` | `string`                      | The value of the radio to be checked initially (in uncontrolled mode)                                                             |
| `isDisabled`   | `boolean`                     | If `true`, all wrapped radio inputs will be disabled                                                                              |
| `isFocusable`  | `boolean`                     | If `true` and `isDisabled` is `true`, all wrapped radio inputs will remain focusable but not interactive.                         |
| `isNative`     | `boolean`                     | If `true`, input elements will receive `checked` attribute instead of `isChecked`. This assumes, you're using native radio inputs |
| `name`         | `string`                      | The `name` attribute forwarded to each `radio` element                                                                            |
| `onChange`     | `(nextValue: string) => void` | TFunction called once a radio is checked @param nextValue the value of the checked radio                                          |
| `value`        | `string>`                     | The value of the radio to be `checked` (in controlled mode)                                                                       |

**Return Value**

The `useRadioGroup` hook returns following props:

| Value           | Type                                       | Description                                                                    |
| :-------------- | :----------------------------------------- | :----------------------------------------------------------------------------- |
| `value`         | `Array<string \| number>`                  | The value of radio group                                                       |
| `name`          | `string`                                   | The name of the radio options. All radio options must use the same name        |
| `ref`           | `any`                                      | The ref of the radio group                                                     |
| `isDisabled`    | `boolean`                                  | A utility to manage disabled state                                             |
| `isFocusable`   | `boolean`                                  | A utility to manage focused state                                              |
| `focus`         | `() => void`                               | A utility function to set the focus on the first enabled radio                 |
| `onChange`      | `(nextValue: EventOrValue) => void`        | The onChange handler for the radio group                                       |
| `setValue`      | `(state: Array<string \| number>) => void` | A function to set the value of the radio group                                 |
| `getRadioProps` | `(props?: Dict) => Dict`                   | A function that takes root props and handles changes for the radio group       |
| `getRootProps`  | `(props?: Dict) => Dict`                   | A function that takes radio root props and handles changes for the radio group |
| `htmlProps`     | `{)`                                       | An object with all htmlProps                                                   |

```tsx
import { useRadio, useRadioGroup } from "@ricardocosta/ui-radio";

function Example() {
  function CustomRadio(props) {
    const { image, ...radioProps } = props;
    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
      useRadio(radioProps);

    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <Box
          {...getCheckboxProps()}
          bg={state.isChecked ? "green.200" : "transparent"}
          w={12}
          p={1}
          rounded="full"
        >
          <Image src={image} rounded="full" {...getLabelProps()} />
        </Box>
      </chakra.label>
    );
  }

  const toast = useToast();

  const avatars = [
    { name: "Kat", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Kevin", image: "https://randomuser.me/api/portraits/men/86.jpg" },
    { name: "Andy", image: "https://randomuser.me/api/portraits/men/29.jpg" },
    { name: "Jess", image: "https://randomuser.me/api/portraits/women/95.jpg" },
  ];

  const handleChange = (value) => {
    toast({
      title: `The value got changed to ${value}!`,
      status: "success",
      duration: 2000,
    });
  };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Kevin",
    onChange: handleChange,
  });

  return (
    <Stack {...getRootProps()}>
      <Text>The selected radio is: {value}</Text>
      <HStack>
        {avatars.map((avatar) => {
          return (
            <CustomRadio
              key={avatar.name}
              image={avatar.image}
              {...getRadioProps({ value: avatar.name })}
            />
          );
        })}
      </HStack>
    </Stack>
  );
}
```

**Using `isDisabled` and `isFocusable`**

When providing the hook with the `isDisabled` and/or `isFocusable` props, this values also need to be returned and passed to the radio inputs.

This is different than simply passing them as props to the `RadioGroup` component because the component has access to context to supply the values to the radio inputs.

Below is an example with `isDisabled` being passed to the hook and used with the `Radio` component. If needed, this custom component can than be controllable by a parent, which would supply the logic to determine if the inputs need to be disabled.

```tsx
function CustomRadioGroup(props) {
  const { options, ...rest } = props;

  const { getRootProps, getRadioProps, isDisabled } = useRadioGroup({
    ...rest,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <Radio isDisabled={isDisabled} key={value} {...radio}>
            {value}
          </Radio>
        );
      })}
    </HStack>
  );
}

function Parent() {
  const [isDisabled, setIsDisabled] = useState(true);

  // Some logic to handle the disabled state

  return (
    <>
      {/* Any components above */}
      <CustomRadioGroup isDisabled={isDisabled} options={["react", "vue", "svelte"]} />
      {/* Any components below */}
    </>
  );
}

render(<Parent />);
```

[🔗 ChakraUI useRadioGroup](https://chakra-ui.com/docs/hooks/use-radio-group)
