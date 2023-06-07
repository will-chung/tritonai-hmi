<script>
  import "carbon-components-svelte/css/g80.css";

  import { carNum } from "$lib/stores.js";
  import { drawSpeedometer } from '$lib/gauges/Speedometer.js';
  import { drawFuelMeter } from "$lib/gauges/FuelMeter.js";
  import { drawTachometer } from "$lib/gauges/Tachometer.js";
  import { draw } from "$lib/gauges/Gauge.js";

  import { GasStationFilled } from "carbon-icons-svelte";

  import { onMount } from 'svelte';

  import Flags from "$lib/components/Flags.svelte";
  import InfoBar from '$lib/components/InfoBar.svelte';
  import Speeds from "$lib/components/Speeds.svelte";
  import Controls from "$lib/components/Controls.svelte";

  const MAX_SPEED = 1000;
  const MAX_RPM = 9000;
  const MAX_FUEL = 100;

  const INFOBAR_HEIGHT = 8;
  const OVERFLOW = 250;
  
  let windowHeight;
  let height; 

  let speedPercent = 1;
  let fuelPercent = 1;
  let rpmPercent = 1;

  // let speedCanvas; 
  // let fuelCanvas;
  // let rpmCanvas;

  let canvas;

  function showcase() {
     if (!$carNum.selected) return;

    const speedStart = 0;
    const rpmStart = 0;
    const fuelStart = 100;

    let speedOffset = 0;
    let rpmOffset = 0; 
    let fuelOffset = 0;
    let timeoutID;

    function nextFrame() {
      if (!$carNum.selected) {
        clearTimeout(timeoutID);
        return;
      }

      speedOffset += 10;
      rpmOffset += 90;
      fuelOffset -= 1;

      speedPercent = (speedStart + speedOffset) / MAX_SPEED;
      rpmPercent = (rpmStart + rpmOffset) / MAX_RPM;
      fuelPercent = (fuelStart + fuelOffset) / MAX_FUEL;

      timeoutID = setTimeout(nextFrame, 100);
    }

    nextFrame();
  }

  function demo() {
    if (!$carNum.selected) return;

    const speedStart = 660;
    const rpmStart = 5000;
    let timeoutID;

    function nextFrame() {
      if (!$carNum.selected) {
        clearTimeout(timeoutID);
        return;
      }
      let speedOffset = Math.floor(Math.random() * 2);
      let rpmOffset = Math.floor(Math.random() * 90);

      // randomly negate offset
      if (Math.random() <= 0.5) speedOffset = -speedOffset; 
      if (Math.random() <= 0.5) rpmOffset = -rpmOffset;

      speedPercent = (speedStart + speedOffset) / MAX_SPEED;
      rpmPercent = (rpmStart + rpmOffset) / MAX_RPM;

      timeoutID = setTimeout(nextFrame, 100);
    }

    nextFrame();
  }
  
  // async function demo() {
  //   if (!$carNum.selected) return;

  //   let speedData;
  //   let rpmData;
  //   let fuelData;

  //   let res = await fetch('speed.csv');
  //   speedData = (await res.text()).split('\n');

  //   res = await fetch('rpm.csv');
  //   rpmData = (await res.text()).split('\n');

  //   res = await fetch('fuel.csv');
  //   fuelData = (await res.text()).split('\n');

  //   const max = Math.max(speedData.length, rpmData.length, fuelData.length);

  //   let speedIndex = 0;
  //   let rpmIndex = 0;
  //   let fuelIndex = 0;
  //   function step() {
  //     if (speedIndex < speedData.length) {
  //       speedPercent = speedData[speedIndex] / MAX_SPEED; 
  //       speedIndex += 1;
  //       setTimeout(step, 25);
  //     }
  //     if (rpmIndex < rpmData.length) {
  //       rpmPercent = rpmData[rpmIndex] / MAX_RPM;
  //       rpmIndex += 1;
  //       setTimeout(step);
  //     }
  //     if (fuelIndex < fuelData.length) {
  //       fuelPercent = fuelData[fuelIndex] / MAX_FUEL;
  //       fuelIndex += 1;
  //       setTimeout(step, 250);
  //     }
  //   }

  //   step();
  // }

  function createHiPPICanvas(width, height) {
    const ratio = window.devicePixelRatio;
    const canvas = document.createElement('canvas');

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.getContext('2d').scale(ratio, ratio);

    canvas.style.position = 'relative';
    canvas.style.right = `${OVERFLOW / 2}px`;

    return canvas;
  } 

  onMount(() => {
    windowHeight = window.innerHeight - 1;
    const contentHeight = Math.floor(windowHeight * (1 - (INFOBAR_HEIGHT / 100)));
    height = 0.8 * contentHeight;    

    // speedCanvas = createHiPPICanvas((height) + 20, height);
    // document.getElementById('speedometer').appendChild(speedCanvas);
    // const speedContext = speedCanvas.getContext('2d');
    // speedContext.transform(1, 0, 0, -1, (height + 20) / 2, height / 2);

    // fuelCanvas = createHiPPICanvas((height / 2) + 20, height / 2);
    // document.getElementById('fuelmeter').appendChild(fuelCanvas);
    // const fuelContext = fuelCanvas.getContext('2d');
    // fuelContext.transform(1, 0, 0, -1, (height + 20) / 4, height / 4);

    // rpmCanvas = createHiPPICanvas((height / 2) + 20, (height / 2) + 20);
    // document.getElementById('tachometer').appendChild(rpmCanvas);
    // const rpmContext = rpmCanvas.getContext('2d');
    // rpmContext.transform(1, 0, 0, -1, (height + 20) / 4, (height / 4));

    canvas = createHiPPICanvas(height + OVERFLOW, height);
    document.getElementById('gauges').appendChild(canvas);
    const context = canvas.getContext('2d');
    context.transform(1, 0, 0, -1, (height + OVERFLOW) / 2, height / 2);
  });

  $: gasFill = (fuelPercent <= 0.2) ? 'red' : 'white';

  // $: drawSpeedometer(speedCanvas, height / 2, speedPercent, 'kmh');
  // $: drawFuelMeter(fuelCanvas, height / 4, fuelPercent);
  // $: drawTachometer(rpmCanvas, height / 4, rpmPercent, 'rpm');

  $: data = {
    speedPercent: speedPercent,
    rpmPercent: rpmPercent,
    fuelPercent: fuelPercent
  };

  $: draw(canvas, height, data);

  $: if ($carNum.selected && $carNum.num === 6) showcase();
  else if ($carNum.selected && $carNum.num === 22) {
    // TODO: easter egg
  }
  else if ($carNum.selected) demo();
</script>

<div id="container" style:height="{windowHeight}px">
  <InfoBar height="{INFOBAR_HEIGHT}"/>
  <div id="row">
    <Controls/>
    <div id="gauges" style:height="{height}px">
      <div id="fuelIcon">
        <GasStationFilled size="30" fill="{gasFill}"/>
      </div>
      <!-- <div class="gauge" id="speedometer">
      </div>
      <div class="gauge" id="fuelmeter">
        <div id="fuelIcon">
          <GasStationFilled size="30" fill="{gasFill}"/>
        </div>
      </div>
      <div class="gauge" id="tachometer">
      </div> -->
    </div>
    <Flags/>
  </div>
  <Speeds/>
</div>

<style>
  #row {
    display: flex;
    height: 70%;
  }

  #gauges {
    aspect-ratio: 1 / 1;
  }

  /* .gauge {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  /* #fuelmeter {
    position: absolute;
    top: 8%;
    right: 27%;
  }

  #tachometer {
    position: absolute;
    top: 8%;
    left: 25%;
  } */

  #fuelIcon {
    position: absolute;
    width: 35px;
    height: 35px;
    right: 415px; 
    top: 155px;
  }
</style>