# Design

## Initial

The initial design of the HMI is shown below:

![initial design]()

and after translation to Figma:

![figma initial design]()

Circles are set buttons, and when toggled they set their associated value. For example, when the `SELECT CAR` set button is toggled, the currently selected car number is set as the current value. A set button is active (the value is set) when it lights up green. 

Squares with numbers inside display the current value. In the case of flags (second row), each square represents a flag and can be toggled. When a flag is active it will light up. In the case of modes (first row to the right), each square represents a mode and can be toggled. 

Car modes are mutually exclusive and only one can be active at a time. To set a car mode, first make sure the `SELECT MODE` set button is not active and then select the desired mode. Once a mode is selected, toggle the `SELECT MODE` set button to set the mode.

For all set buttons, once a set button is active the associated value cannot be changed. For example, once a car mode is set, the mode buttons become disabled and cannot be clicked. Only once the set button is toggled to inactive can the associated value be changed again.

## Final

## Functionality