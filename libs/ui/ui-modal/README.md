# Modal

Wrapper for [`@chakra-ui/modal`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/modal) package.

## Usage

A modal is a dialog that focuses the user's attention exclusively on an information via a window that is overlaid on primary content. When the modal opens:

- focus is trapped within the modal and set to the first tabbable element.
- content behind a modal dialog is inert, meaning that users cannot interact with it.

```tsx
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@ricardocosta/ui-modal";

const BasicUsage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
```

[🔗 ChakraUI Modal](https://chakra-ui.com/docs/components/modal)
