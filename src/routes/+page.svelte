<script>
  import "carbon-components-svelte/css/g80.css";

  import { carNum } from "$lib/stores.js";
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

  const INFOBAR_HEIGHT = 50;
  let OVERFLOW;
  
  let windowWidth;
  let windowHeight;
  let contentHeight;
  let height; 

  let speedPercent = 1;
  let fuelPercent = 1;
  let rpmPercent = 1;

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
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    contentHeight = Math.floor(windowHeight * (1 - (INFOBAR_HEIGHT / windowHeight)));
    height = 0.8 * contentHeight;    

    OVERFLOW = height / 2;

    canvas = createHiPPICanvas(height + OVERFLOW, height);
    document.getElementById('gauges').appendChild(canvas);
    const context = canvas.getContext('2d');
    context.transform(1, 0, 0, -1, (height + OVERFLOW) / 2, height / 2);
  });

  $: gasFill = (fuelPercent <= 0.2) ? 'red' : 'white';
  $: iconSize = height / 18;
  
  // position fuel icon
  $: radius = height / 2;
  $: adjustedRadius = radius * Math.sin(Math.PI / 8);
  $: bottom = (contentHeight * 0.2) + (adjustedRadius * 1.4) + (radius * Math.cos(Math.PI / 4)) - 20 + (iconSize * 0.75);
  $: right = (windowWidth * 0.5) - (radius * Math.cos(Math.PI / 4)) - iconSize - (iconSize * 0.75); 

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
  <div id="content" style:height="{contentHeight}px">
    <div id="row">
      <Controls/>
      <div id="gauges">
        <div id="fuelIcon"
             style:bottom="{bottom}px"
             style:right="{right}px">
          <GasStationFilled size="{iconSize ? iconSize : 0}" fill="{gasFill}"/>
        </div>
      </div>
      <Flags/>
    </div>
    <Speeds/>
  </div>
</div>

<style>
  #row {
    display: flex;
    height: 80%;
  }

  #gauges {
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  #fuelIcon {
    position: absolute;
  }
</style>