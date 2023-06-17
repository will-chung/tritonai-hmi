# Technical Details

## Web App

The human-machine interface is built as a web application and can be hosted on any browser. This is meant to provide easier access to the HMI. 

## Svelte

The web application is built using [SvelteKit](https://kit.svelte.dev/docs/introduction), a framework for building web applications based on [Svelte](https://svelte.dev/). SvelteKit makes building performant web applications a lot easier by simplifying the design process (encourages component-based design) and handling a lot of the data flow and state management within the app. Svelte also has better performance compared to other frameworks such as React and Angular, which makes it better-suited for building an HMI which depends on live, efficient updates to the user interface to display incoming data.

## Deployment

Being a web app, the HMI can be deployed to any browser and can be accessed on any device with access to a browser. This makes accessing the HMI much easier because the app is platform-independent. 

## Connecting to a Vehicle

The HMI is currently only a frontend template disconnected from an autonomous vehicle. However, there are important connection points in the code where the HMI can be easily extended to accomodate communication with a backend. These connection points effectively provide an API for connecting to an autonomous vehicle, and are outlined below (the functionality of these components is discussed in `design.md`):

### Gauges

The three gauges (speedometer, tachometer, and fuel meter) are rendered by the `drawSpeedometer`, `drawTachometer`, and `drawFuelMeter` functions. The code for these functions is contained under the `src/lib/gauges/` directory. 

The `percent` parameter in each function represents the ratio of the current value to the maximum value of the gauge (e.g., a current value of 500kmh for the speedometer translates to `percent = 0.5`).  

Inside `+page.svelte`, reassigning the `speedPercent`, `rpmPercent`, and `fuelPercent` variables (which correspond to the `percent` parameter) will cause the respective gauges to re-render and display the new value. Data received from a connected vehicle can simply be processed and assigned to the previous variables in order to display the information on the gauges. 

### Selectors

A selector is a component that has a set button (round button). The code for the various selectors in the HMI are contained in the `{Car, Mode, Speed}Selector.svelte` files under the `src/lib/components/` directory. 

When a set button is toggled (lights up green), the associated value will be saved inside a store (read more about Svelte stores [here](https://svelte.dev/tutorial/writable-stores)). Stores are defined inside `src/lib/stores.js`. The current car number is stored inside `carNum`, the current mode is stored inside `carMode`, and the different speeds are stored inside `carSpeeds`. 

This storing is handled inside the `select` function within `src/lib/components/SetButton.svelte`. Code to communicate the selected value to a connected vehicle can be contained here. 

For establishing a connection with a vehicle, the relevant code can be placed inside `src/lib/components/CarSelector.svelte`. This file handles selecting the current car to connect to.

### Flags

Currently active status flags are stored in the `statusFlags` store. Flags are controlled by `src/lib/components/Flag.svelte`. The `toggle` function inside this file is called whenever a flag is pressed, and code to communicate status flag information to a connected vehicle can be placed inside here.
