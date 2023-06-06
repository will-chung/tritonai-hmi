// window.addEventListener('DOMContentLoaded', () => {
//   const numberContainer = document.getElementById('numberContainer');
//   const csvFile = 'numbers.csv'; // Replace 'numbers.csv' with the actual name of your CSV file

//   // Function to read the CSV file and display the numbers
//   function displayNumbersFromCSV() {
//     fetch(csvFile)
//       .then(response => response.text())
//       .then(data => {
//         const numbers = data.split('\n').filter(Boolean); // Split CSV rows into an array of numbers

//         // Display the numbers
//         let currentIndex = 0;
//         const displayNextNumber = () => {
//           if (currentIndex <= 600) {
//             const numberElement = document.createElement('p');
//             numberElement.textContent = currentIndex;
//             numberContainer.appendChild(numberElement);
//             currentIndex++;
//             setTimeout(displayNextNumber, 100); // Delay between each number display (Milliseconds)
//           }
//         };

//         displayNextNumber();
//       })
//       .catch(error => console.log(error));
//   }

//   // Call the function to display numbers on page load
//   displayNumbersFromCSV();
// });

/* ***********************************

  TO MAKE THE INFORMATION LOOP 5 TIMES
  
*********************************** */

window.addEventListener('DOMContentLoaded', () => {
  const numberContainer = document.getElementById('numberContainer');
  const csvFile = 'numbers.csv'; // Replace 'numbers.csv' with the actual name of your CSV file

  // Function to read the CSV file and display the numbers
  function displayNumbersFromCSV() {
    fetch(csvFile)
      .then(response => response.text())
      .then(data => {
        const numbers = data.split('\n').filter(Boolean); // Split CSV rows into an array of numbers

        // Display the numbers in a loop
        const loopCount = 5; // Number of times to loop
        let loopCounter = 0;
        let currentIndex = 0;

        const displayNextNumber = () => {
          if (loopCounter < loopCount && currentIndex < numbers.length) {
            const numberElement = document.createElement('p');
            numberElement.textContent = numbers[currentIndex];
            numberContainer.appendChild(numberElement);
            currentIndex++;
            if (currentIndex === numbers.length) {
              loopCounter++;
              currentIndex = 0;
            }
            setTimeout(displayNextNumber, 50); // Delay between each number display
          }
        };

        displayNextNumber();
      })
      .catch(error => console.log(error));
  }

  // Call the function to display numbers on page load
  displayNumbersFromCSV();
});
