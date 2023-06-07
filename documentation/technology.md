# Technical Details

## Web App

The human-machine interface is built as a web application and can be hosted on any browser. 

## Svelte

The web application is built using [SvelteKit)](https://kit.svelte.dev/docs/introduction), a framework for building web applications based on [Svelte](https://svelte.dev/). 

## Deployment

Being a web app, the HMI can be deployed to any browser and can be accessed on any device with access to a browser.

### Connecting to a vehicle

<!-- The HMI is currently only a frontend template, without an API for connecting to an autonomous vehicle. However, important connection points in the interface are:
- `Flag.svelte`
  - This file contains the code for the status flag buttons. The `toggle()` function is called each time a flag is pressed, and relevant code for communicating the status flag can be placed here.
- `SetButton.svelte`
  - This file contains the code for the various set buttons throughout the HMI (e.g. `SELECT CAR`, `SELECT MODE`, `GREEN SPEED`, etc.). The `select()` function is called each time a set button is set (i.e. pressed), and relevant code for communicating information can be placed here.
- `+page.svelte`
  - This file is the heart of the HMI, it controls what is being displayed and connects various components together. The `drawSpeedometer`, `drawTachomemter`, and `drawFuelMeter` functions control what is rendered to the screen. Passsing in different values to these functions will update the HMI. Particularly, setting `speedPercent`, `rpmPercent`, and `fuelPercent` will re-render the respective gauge. These values represent what percent of the gauge the current value is (e.g., a current speed value of 500kmh is represented as `speedPercent = 0.5`). -->

#### Gauges

The three gauges (speedometer, tachometer, and fuel meter) are rendered by the `drawSpeedometer`, `drawTachometer`, and `drawFuelMeter` functions. The code for these functions is contained under the `src/lib/gauges` directory. 

The `percent` parameter in each function represents the ratio of the current value to the maximum value of the gauge (e.g., a current value of 500kmh for the speedometer translates to `percent = 0.5`).  

Inside `+page.svelte`, reassigning `speedPercent`, `rpmPercent`, and `fuelPercent` (which correspond to the `percent` parameter) will cause the respective gauges to re-render to display the new value.

#### Selectors

A selector is a component that has a set button (round button). The code for the various selectors in the HMI are contained in `{Car, Mode, Speed}Selector.svelte` files under the `src/lib/components/` directory. 

When a set button is toggled (lights up green), the associated value will be saved inside a store (read more about Svelte stores here). Stores are defined inside `src/lib/stores.js`. The current car number is stored inside `carNum`, the current mode is stored inside `carMode`, and the different speeds are stored inside `carSpeeds`. 

This storing is handled inside the `select` function within `src/lib/components/SetButton.svelte`. Code to communicate the selected value can be contained here. 

For establishing a connection with a vehicle, the relevant code can be placed inside `src/lib/components/CarSelector.svelte`. This file handles selecting the current car to connect to.

#### Flags

Currently active status flags are stored in the `statusFlags` store. Flags are controlled by `src/lib/components/Flag.svelte`. The `toggle` function inside this file is called whenever a flag is pressed, and code to communicate status flag information can be placed inside here.
