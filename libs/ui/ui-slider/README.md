# Slider

Wrapper for [`@chakra-ui/slider`](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/slider) package.

## Usage

The Slider is used to allow users to make selections from a range of values.

Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.

```tsx
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@ricardocosta/ui-slider";

// Basic usage
<Slider aria-label="slider-ex-1" defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>;

// Slider with thumb showing in a tooltip
function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Slider
      id="slider"
      defaultValue={5}
      min={0}
      max={100}
      colorScheme="teal"
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
        25%
      </SliderMark>
      <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
        50%
      </SliderMark>
      <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
        75%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}
```

[🔗 ChakraUI Slider](https://chakra-ui.com/docs/components/slider)
