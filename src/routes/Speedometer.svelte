<script>
  import { onMount, tick } from "svelte";

  export let height;

  let canvas;
  let context;

  const COLOR = 'green';
  const MAX_SPEED = 999;
  const NUM_TICKS = 40;
  const TOTAL_DEGS = 5 * Math.PI / 4;
  const V_OFFSET = -10;
  const WIDTH = 40;
  let RADIUS;

  function clearCanvas() {
    context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  }

  function drawValue(val) {
    context.fillStyle = 'white';
    context.save();
    context.transform(1, 0, 0, -1, 0, 0);
    context.font = '96px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(val, 0, 0 + V_OFFSET);
    context.restore();
  }

  function drawLabel(lbl) {
    context.fillStyle = 'white';
    context.save();
    context.transform(1, 0, 0, -1, 0, 0);
    context.font = '48px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(lbl, 0, 100 + V_OFFSET);
    context.restore();
  }

  export function drawSpeedometer(percent) {
    clearCanvas();

    const startAngle = (Math.PI / 2) + (TOTAL_DEGS / 2); 
    const endAngle = startAngle - (percent * TOTAL_DEGS); 
    
    const startX = RADIUS * Math.cos(startAngle);
    const startY = RADIUS * Math.sin(startAngle);
    
    const endX = (RADIUS - WIDTH) * Math.cos(endAngle);
    const endY = (RADIUS - WIDTH) * Math.sin(endAngle);
    
    context.fillStyle = COLOR;
    
    context.beginPath();
    context.moveTo(startX, startY + V_OFFSET);
    context.arc(0, V_OFFSET, RADIUS, startAngle, endAngle, true);
    context.lineTo(endX, endY + V_OFFSET);
    context.arc(0, V_OFFSET, RADIUS - WIDTH, endAngle, startAngle, false);
    context.lineTo(startX, startY + V_OFFSET);
    context.fill();
    context.closePath();
    
    function drawTicks(percent) {
      context.lineWidth = 3;
      const degInc = TOTAL_DEGS / NUM_TICKS;
      const max = percent * NUM_TICKS;

      let startX;
      let startY;
      let endX;
      let endY;

      for (let i = 1; i < max; i++) {
        startX = (RADIUS - WIDTH) * Math.cos(startAngle - (degInc * i));
        startY = (RADIUS - WIDTH) * Math.sin(startAngle - (degInc * i));
        endX = RADIUS * Math.cos(startAngle - (degInc * i));
        endY = RADIUS * Math.sin(startAngle - (degInc * i));

        context.beginPath();
        context.moveTo(startX, startY + V_OFFSET);
        context.lineTo(endX, endY + V_OFFSET);
        context.stroke();    
        context.closePath();
      }
    }

    drawTicks(percent);
    drawValue(Math.floor(percent * MAX_SPEED));
    drawLabel('MPH');
  }

  onMount(async () => {
    RADIUS = canvas.height / 2;

    context = canvas.getContext('2d');
    context.setTransform(1, 0, 0, -1, canvas.height / 2, canvas.height / 2);

    // drawSpeedometer(1);
  });
</script>

<div id="speedometer" style:height="{height}">
  <canvas width="{height}" height="{height}" bind:this={canvas}></canvas>
</div>

<style>
  #speedometer {
    border: 1px solid red;
    aspect-ratio: 1 / 1;
  }
</style>