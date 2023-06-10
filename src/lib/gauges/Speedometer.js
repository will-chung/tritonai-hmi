import { drawFuelMeter } from "./FuelMeter";
import { drawTachometer } from "./Tachometer";

const COLOR = '#42be65';
const INCREMENT = 100; 
const MAX_VALUE = 1000;
const TOTAL_DEGS = 5 * Math.PI / 4;

const START_ANGLE = (Math.PI / 2) + (TOTAL_DEGS / 2); 
const END_ANGLE = (Math.PI / 2) - (TOTAL_DEGS / 2); 
  
export function drawSpeedometer(canvas, radius, data, lbl) {
  if (!canvas) return;
  if (data.speedPercent < 0) data.speedPercent = 0;
  else if (data.speedPercent > 1) data.speedPercent = 1;
  
  const context = canvas.getContext('2d');
  const RADIUS = radius;

  const adjustedRadius = Math.abs(radius * Math.sin(START_ANGLE));
  console.log(adjustedRadius)
  const V_OFFSET = -radius + (adjustedRadius * 1.4);
  
  
  // function clearCanvas() {
  //   context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  // }
  // clearCanvas();

  let offset = data.speedPercent * TOTAL_DEGS;
  const endAngle = START_ANGLE - offset; 
  
  // draw "needle"
  function drawNeedle() {
    context.shadowBlur = 10;
    context.shadowColor = COLOR;
    context.strokeStyle = COLOR;
    context.lineWidth = 8;
    context.lineCap = 'round';
    
    context.beginPath();
    context.arc(0, V_OFFSET, RADIUS, START_ANGLE, endAngle, true);
    context.stroke();
    context.closePath();

    context.shadowBlur = 0;
  }

  drawNeedle();

  function drawEndMarker() {
    const x = RADIUS * Math.cos(endAngle);
    const y = RADIUS * Math.sin(endAngle);

    context.fillStyle = 'white';

    context.beginPath();
    context.moveTo(x, y + V_OFFSET);
    context.arc(x, y + V_OFFSET, 5, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }

  drawEndMarker();
  
  function drawTicks() {
    context.lineCap = 'round';
    
    let currAngle = START_ANGLE;
    let degInc; 

    let startX;
    let startY;
    let endX;
    let endY;

    // primary ticks
    context.shadowBlur = 10;
    context.shadowColor = 'white'
    context.strokeStyle = 'white';
    context.lineWidth = 3;
    degInc = (INCREMENT / MAX_VALUE) * TOTAL_DEGS;
    for(let i = 0; i <= MAX_VALUE / INCREMENT; i++) {
      startX = (RADIUS - 30) * Math.cos(currAngle);
      startY = (RADIUS - 30) * Math.sin(currAngle);
      endX = (RADIUS - 13) * Math.cos(currAngle);
      endY = (RADIUS - 13) * Math.sin(currAngle);
      
      context.beginPath();
      context.moveTo(startX, startY + V_OFFSET);
      context.lineTo(endX, endY + V_OFFSET);
      context.stroke();    
      context.closePath();

      currAngle -= degInc;
    }

    // secondary ticks
    currAngle = START_ANGLE - (degInc / 2);
    context.shadowColor = COLOR;
    context.strokeStyle = COLOR;
    context.lineWidth = 2;
    degInc = (INCREMENT / MAX_VALUE) * TOTAL_DEGS;
    for (let i = 0; i < MAX_VALUE / INCREMENT; i++) {
      startX = (RADIUS - 28) * Math.cos(currAngle);
      startY = (RADIUS - 28) * Math.sin(currAngle);
      endX = (RADIUS - 18) * Math.cos(currAngle);
      endY = (RADIUS - 18) * Math.sin(currAngle);
      
      context.beginPath();
      context.moveTo(startX, startY + V_OFFSET);
      context.lineTo(endX, endY + V_OFFSET);
      context.stroke();    
      context.closePath();

      currAngle -= degInc;
    }
    context.shadowBlur = 0;

    // tertiary ticks
    degInc /= 8;
    currAngle = START_ANGLE - degInc;
    context.strokeStyle = COLOR;
    context.lineWidth = 1;
    for (let i = 0; i < MAX_VALUE / INCREMENT; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 3; k++) {
          startX = (RADIUS - 28) * Math.cos(currAngle);
          startY = (RADIUS - 28) * Math.sin(currAngle);
          endX = (RADIUS - 18) * Math.cos(currAngle);
          endY = (RADIUS - 18) * Math.sin(currAngle);
          
          context.beginPath();
          context.moveTo(startX, startY + V_OFFSET);
          context.lineTo(endX, endY + V_OFFSET);
          context.stroke();    
          context.closePath();

          currAngle -= degInc;
        }
        // skip
        currAngle -= degInc;
      }
    }
  }

  drawTicks();

  function drawTickLabels() {
    context.fillStyle = 'white';

    const degInc = (INCREMENT / MAX_VALUE) * TOTAL_DEGS;

    let currAngle = -START_ANGLE;

    let x;
    let y;

    for (let i = 0; i <= MAX_VALUE / INCREMENT; i++) {
      x = (RADIUS - 50) * Math.cos(currAngle);
      y = (RADIUS - 50) * Math.sin(currAngle);
      
      context.save();
      context.transform(1, 0, 0, -1, 0, 0);
      context.font = '16px sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(INCREMENT * i, x, y - V_OFFSET);
      context.restore();

      currAngle += degInc;
    }
  }

  drawTickLabels();
  
  function drawValue(val) {
    context.fillStyle = 'white';
    
    context.save();
    context.transform(1, 0, 0, -1, 0, 0);
    context.font = '72px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(val, 0, -V_OFFSET - 5);
    context.restore();

    context.shadowBlur = 10;
    context.shadowColor = 'white';
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    
    context.beginPath();
    context.arc(0, V_OFFSET, RADIUS - 90, START_ANGLE, END_ANGLE, true);
    context.stroke();
    context.closePath();
    
    context.shadowBlur = 0;
  }

  drawValue(Math.floor(data.speedPercent * MAX_VALUE));

  function drawLabel(lbl) {
    context.fillStyle = COLOR;
    
    context.save();
    context.transform(1, 0, 0, -1, 0, 0);
    context.font = 'bold 18px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(lbl, 0, -V_OFFSET + 40);
    context.restore();
  }

  drawLabel(lbl);

  drawTachometer(canvas, radius / 2, data.rpmPercent, 'rpm', V_OFFSET);
  drawFuelMeter(canvas, radius / 2, data.fuelPercent, V_OFFSET);
}