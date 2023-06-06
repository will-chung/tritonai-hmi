const MAX_SPEED = 1000;
const MAX_RPM = 9000;
const MAX_FUEL = 100;

function demoSpeed() {
  fetch('speed.csv')
    .then(response => response.text())
    .then(data => {
      const numbers = data.split('\n'); // read each line into numbers array 

      // display numbers in a loop
      const loopCount = 5; // number of times to loop
      let loopCounter = 0;
      let currentIndex = 0;

      const displayNextNumber = () => {
        if (loopCounter < loopCount && currentIndex < numbers.length) {
          speedPercent = numbers[currentIndex] / 1000;
          postMessage(speedPercent);
          currentIndex++;
          if (currentIndex === numbers.length) {
            loopCounter++;
            currentIndex = 0;
          }
          setTimeout(displayNextNumber, 25); // delay between each number display
        }
      };

      displayNextNumber();
    })
    .catch(error => console.error(error));
}

function demoRPM() {
  fetch('rpm.csv')
    .then(response => response.text())
    .then(data => {
      const numbers = data.split('\n'); // read each line into numbers array 

      // display numbers in a loop
      const loopCount = 5; // number of times to loop
      let loopCounter = 0;
      let currentIndex = 0;

      const displayNextNumber = () => {
        if (loopCounter < loopCount && currentIndex < numbers.length) {
          rpmPercent = numbers[currentIndex] / MAX_RPM;
          postMessage(rpmPercent);
          currentIndex++;
          if (currentIndex === numbers.length) {
            loopCounter++;
            currentIndex = 0;
          }
          setTimeout(displayNextNumber, 25); // delay between each number display
        }
      };

      displayNextNumber();
    })
    .catch(error => console.error(error));
}

function demoFuel() {
  fetch('fuel.csv')
    .then(response => response.text())
    .then(data => {
      const numbers = data.split('\n'); // read each line into numbers array 

      // display numbers in a loop
      const loopCount = 5; // number of times to loop
      let loopCounter = 0;
      let currentIndex = 0;

      const displayNextNumber = () => {
        if (loopCounter < loopCount && currentIndex < numbers.length) {
          fuelPercent = numbers[currentIndex] / MAX_FUEL;
          postMessage(fuelPercent);
          currentIndex++;
          if (currentIndex === numbers.length) {
            loopCounter++;
            currentIndex = 0;
          }
          setTimeout(displayNextNumber, 25); // delay between each number display
        }
      };

      displayNextNumber();
    })
    .catch(error => console.error(error));
}

self.addEventListener('message', (e) => {
  switch (e.data) {
    case 'speed':
      demoSpeed();
      self.close();
      break;
    case 'rpm':
      demoRPM();
      self.close();
      break;
    case 'fuel':
      demoFuel();
      self.close();
      break;
  }
});