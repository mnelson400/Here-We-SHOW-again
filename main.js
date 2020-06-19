// Here We SHOW Again Katas

const parentElement = document.querySelector ('.katas-list');


// 1. Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)

for (counter = 1; counter <= 20; counter += 1) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 1: ' + counter);
}


// 2. Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)

for (evenCounter = 2; evenCounter <= 20; evenCounter +=2) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 2: ' + evenCounter);
}


// 3. Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)

for (oddCounter = 1; oddCounter <= 20; oddCounter += 2) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 3: ' + oddCounter);
}


// 4. Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)

for (fiveCounter = 5; fiveCounter <= 100; fiveCounter += 5) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 4: ' + fiveCounter);
}


// 5. Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)

for (squareCounter = 1; squareCounter <= 100; squareCounter += 1) {
    const perfectSquare = Number.isInteger(Math.sqrt(squareCounter));
    if (perfectSquare) {
      const divElement = document.createElement ('div');
      parentElement.append (divElement);
      divElement.append ('KATA 5: ' + squareCounter);
    }
}


// 6. Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)

for (backCounter = 20; backCounter >= 1; backCounter -= 1) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 6: ' + backCounter);
}


// 7. Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)

for (evenBackCount = 20; evenBackCount >= 2; evenBackCount -= 2) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 7: ' + evenBackCount);
}


// 8. Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)

for (oddBackCount = 19; oddBackCount >= 1; oddBackCount -= 2) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 8: ' + oddBackCount);
}


// 9. Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)

for (fiveBackCount = 100; fiveBackCount >= 5; fiveBackCount -= 5) {
  const divElement = document.createElement ('div');
  parentElement.append (divElement);
  divElement.append ('KATA 9: ' + fiveBackCount);
}


// 10. Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)

for (squareBackCount = 100; squareBackCount >= 1; squareBackCount -= 1) {
  const intSquareBackCount = Number.isInteger(Math.sqrt(squareBackCount));
  if (intSquareBackCount) {
    const divElement = document.createElement ('div');
    parentElement.append (divElement);
    divElement.append ('KATA 10: ' + squareBackCount);
  }
}


// 11. Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472
    ];
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let currentElement = sampleArray [counter];
    const divElement = document.createElement ('div');
    parentElement.append (divElement);
    divElement.append ('KATA 11: ' + currentElement);
}


// 12. Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let currentElement = sampleArray [counter];
    if (currentElement % 2 === 0) {
        const divElement = document.createElement ('div');
        parentElement.append (divElement);
        divElement.append ('KATA 12: ' + currentElement); 
    }
}


// 13. Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let currentElement = sampleArray [counter];
    if (currentElement % 2 !== 0) {
        const divElement = document.createElement ('div');
        parentElement.append (divElement);
        divElement.append ('KATA 13: ' + currentElement); 
    }
}


// 14. Display the square of each element in sampleArray. (219961, 570025, …, 222784)

for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let currentElement = sampleArray [counter];
    const divElement = document.createElement ('div');
    parentElement.append (divElement);
    divElement.append ('KATA 14: ' + (currentElement * currentElement));
}

    
// 15. Display the sum of all the numbers from 1 to 20.

let variable = 0
for (let counter = 1; counter <= 20; counter += 1) {
    variable += counter; 
}
const divElement = document.createElement ('div');
parentElement.append (divElement);
divElement.append ('KATA 15: ' + variable);

    
// 16. Display the sum of all the elements in sampleArray.

let variable2 = 0
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    variable2 = variable2 + sampleArray [counter];
}
const kataHeading = document.createElement ('div');
parentElement.append (kataHeading);
kataHeading.append ('KATA 16: ' + variable2);


// 17. Display the smallest element in sampleArray.

let smallest = Math.min (...sampleArray) // MDN web docs.
const element = document.createElement ('div');
parentElement.append (element);
element.append ('KATA 17: ' + smallest);


// 18. Display the largest element in sampleArray.

let largest = Math.max (...sampleArray) // MDN web docs.
const element2 = document.createElement ('div');
parentElement.append (element2);
element2.append ('KATA 18: ' + largest);

