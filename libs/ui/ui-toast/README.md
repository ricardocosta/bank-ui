# Toast

Wrapper for [`@chakra-ui/toast`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/toast) package.

## Usage

The toast component is used to give feedback to users after an action has taken place.

The toast will close itself when the close button is clicked, or after a timeout.

Toasts can be configured to appear at either the top or the bottom of an application window, and it is possible to have more than one toast onscreen at a time.

```tsx
import { useToast } from "@ricardocosta/ui-toast";

function ToastExample() {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}

function CustomToastExample() {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Hello World
            </Box>
          ),
        })
      }
    >
      Show Toast
    </Button>
  );
}

function ClosingToastExample() {
  const toast = useToast();
  const toastIdRef = React.useRef();

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll() {
    // you may optionally pass an object of positions to exclusively close
    // keeping other positions opened
    // e.g. `{ positions: ['bottom'] }`
    toast.closeAll();
  }

  function addToast() {
    toastIdRef.current = toast({ description: "some text" });
  }

  return (
    <Wrap>
      <Button onClick={addToast} type="button">
        Toast
      </Button>

      <Button onClick={close} type="button" variant="outline">
        Close last toast
      </Button>

      <Button onClick={closeAll} type="button" variant="outline">
        Close all toasts
      </Button>
    </Wrap>
  );
}
```

[🔗 ChakraUI Toast](https://chakra-ui.com/docs/components/toast)
