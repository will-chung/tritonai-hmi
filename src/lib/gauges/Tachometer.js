const COLOR = '#33b1ff';
const INCREMENT = 1000; 
const MAX_VALUE = 9000;
const TOTAL_DEGS = 5 * Math.PI / 4;
const V_OFFSET = -20;

const START_ANGLE = (3 * Math.PI / 4) + (TOTAL_DEGS / 2);
const END_ANGLE = (3 * Math.PI / 4) + (TOTAL_DEGS / 2);

const offsetX = -190;
const offsetY = 110;
  
export function drawTachometer(canvas, radius, percent, lbl) {
  if (!canvas) return;
  if (percent < 0) percent = 0;
  else if (percent > 1) percent = 1;

  const context = canvas.getContext('2d');
  const RADIUS = radius;

  context.save();
  context.transform(1, 0, 0, 1, offsetX, offsetY);
  
  // function clearCanvas() {
  //   context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  // }
  // clearCanvas();

  let offset = percent * TOTAL_DEGS;
  const endAngle = START_ANGLE - offset; 
  
  // draw "needle"
  function drawNeedle() {
    if (percent > (7000 / MAX_VALUE)) {
      context.strokeStyle = 'red';
      context.shadowColor = 'red';
    } else {
      context.strokeStyle = COLOR;
      context.shadowColor = COLOR;
    }
    
    context.shadowBlur = 10;
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
      if (i >= 7) {
        context.strokeStyle = 'red';
        context.shadowColor = 'red';
      } else {
        context.strokeStyle = 'white';
        context.shadowColor = 'white';
      }

      startX = (RADIUS - 28) * Math.cos(currAngle);
      startY = (RADIUS - 28) * Math.sin(currAngle);
      endX = (RADIUS - 15) * Math.cos(currAngle);
      endY = (RADIUS - 15) * Math.sin(currAngle);
      
      context.beginPath();
      context.moveTo(startX, startY + V_OFFSET);
      context.lineTo(endX, endY + V_OFFSET);
      context.stroke();    
      context.closePath();
      
      currAngle -= degInc;
    }
    context.shadowBlur = 0;
    
    // secondary ticks
    currAngle = START_ANGLE - (degInc / 2);
    context.lineWidth = 2;
    degInc = (INCREMENT / MAX_VALUE) * TOTAL_DEGS;
    for (let i = 0; i < MAX_VALUE / INCREMENT; i++) {
      if (i >= 7) context.strokeStyle = 'red';
      else context.strokeStyle = COLOR;

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
    
    // tertiary ticks
    degInc /= 4;
    currAngle = START_ANGLE - degInc;
    context.lineWidth = 1;
    for (let i = 0; i < MAX_VALUE / INCREMENT; i++) {
      if (i >= 7) context.strokeStyle = 'red';
      else context.strokeStyle = COLOR;

      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 1; k++) {
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
      x = (RADIUS - 45) * Math.cos(currAngle);
      y = (RADIUS - 45) * Math.sin(currAngle);
      
      context.save();
      context.transform(1, 0, 0, -1, 0, 0);
      context.font = '12px sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(INCREMENT * i / 1000, x, y - V_OFFSET);
      context.restore();

      currAngle += degInc;
    }
  }

  drawTickLabels();

  function drawLabel(lbl) {
    if (percent >= (7000 / MAX_VALUE)) context.fillStyle = 'red';
    else context.fillStyle = COLOR;
    
    context.save();
    context.transform(1, 0, 0, -1, 0, 0);
    context.font = 'bold 18px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(lbl, 0, -V_OFFSET - 10);
    context.fillText('x1000', 0, -V_OFFSET + 10);
    context.restore();
  }

  drawLabel(lbl);

  context.restore();
}