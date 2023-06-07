import { drawSpeedometer } from "./Speedometer.js";
import { drawTachometer } from "./Tachometer.js";
import { drawFuelMeter } from "./FuelMeter";

export function draw(canvas, height, data) {
  if (!canvas) return;

  const context = canvas.getContext('2d');

  function clearCanvas() {
    context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  }
  clearCanvas();

  drawSpeedometer(canvas, height / 2, data.speedPercent, 'kmh');
  drawTachometer(canvas, height / 4, data.rpmPercent, 'rpm');
  drawFuelMeter(canvas, height / 4, data.fuelPercent);
}