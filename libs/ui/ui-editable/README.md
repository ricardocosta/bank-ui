# Editable

Wrapper for [`@chakra-ui/editable`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/editable) package.

## Usage

`Editable` is used for inline renaming of some text. It appears as normal UI text but transforms into a text input field when the user clicks or focuses on it.

```tsx
import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
} from "@ricardocosta/ui-editable";

// With simple input
<Editable defaultValue="Take some chakra">
  <EditablePreview />
  <EditableInput />
</Editable>;

// With textarea
<Editable defaultValue="Take some chakra">
  <EditablePreview />
  <EditableTextarea />
</Editable>;
```

[🔗 ChakraUI Editable](https://chakra-ui.com/docs/components/editable)
