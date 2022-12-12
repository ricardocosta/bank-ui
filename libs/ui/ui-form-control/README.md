# Form Control

Wrapper for [`@chakra-ui/form-control`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/form-control) package.

## Usage

Form Control provides context such as `isInvalid`, `isDisabled`, and `isRequired` to form elements. 4 components are available:

- `FormControl`: The wrapper that provides context and functionality for all children.
- `FormLabel`: The label of a form section. The usage is similar to html label. `htmlFor` is set by default for children input.
- `FormHelperText`: The message that tells users more details about the form section.
- `FormErrorMessage`: The message that shows up when an error occurs.

```tsx
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@ricardocosta/ui-form-control";

// Basic usage
<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type="email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>;

// Required
<FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder="First name" />
</FormControl>;

// Error Message
function errorMessageExample() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type="email" value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>Enter the email you'd like to receive the newsletter on.</FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
```

[🔗 ChakraUI Form Control](https://chakra-ui.com/docs/components/form-control)
