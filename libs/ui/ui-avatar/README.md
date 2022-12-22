# Avatar

Wrapper for [`@chakra-ui/avatar`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/avatar) package.

## Usage

The `Avatar` component is used to represent user, and displays the profile picture, initials or fallback icon.

- `Avatar`: The image that represents the user.
- `AvatarBadge`: A wrapper that displays its content on the right corner of the avatar.
- `AvatarGroup`: A wrapper to stack multiple Avatars together.

If there is an error loading the `src` of the avatar, there are 2 fallbacks:

- If there's a `name` prop, we use it to generate the initials and a random, accessible background color.
- If there's no `name` prop, we use a default avatar.

In some cases, you might need to stack avatars as a group. Use the `AvatarGroup` component.

- To limit the amount of avatars to show, use the `max` prop. It'll truncate the avatars and show a "+X" label (where X is the remaining avatars).
- To size all the avatars equally, pass the `size` prop.
- To adjust the spacing between the avatars, pass the `spacing` prop.

```tsx
import { Avatar, AvatarBadge, AvatarGroup } from "@ricardocosta/ui-avatar";

// Working image src
<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />;

// Image src not working, name fallback
<Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />;

// No name, nor working image src
<Avatar src="https://bit.ly/broken-link" />;

// Custom fallback icon
<Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />;

// With badge
<Avatar>
  <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />
</Avatar>;

<AvatarGroup size="md" max={2}>
  <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
  <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
  <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
</AvatarGroup>;
```

[🔗 ChakraUI Avatar](https://chakra-ui.com/docs/components/avatar)
