// String Manipulation Functions

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  // Function to count the number of characters in a string
  function countCharacters(str) {
    return str.length;
  }
  
  // Function to capitalize the first letter of each word in a sentence
  function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  // Array Functions
  
  // Function to find the maximum value in an array of numbers
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // Function to find the minimum value in an array of numbers
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // Function to calculate the sum of all elements in an array
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Function to filter out elements from an array based on a given condition
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Mathematical Functions
  
  // Function to calculate the factorial of a given number
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  // Function to generate the Fibonacci sequence up to a given number of terms
  function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
      const nextNum = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNum);
    }
    return sequence;
  }
  
  // Testing the functions
  console.log(reverseString("hello")); // ➞ "olleh"
  console.log(countCharacters("hello")); // ➞ 5
  console.log(capitalizeWords("hello world")); // ➞ "Hello World"
  
  const numbers = [10, 5, 20, 3, 8];
  console.log(findMax(numbers)); // ➞ 20
  console.log(findMin(numbers)); // ➞ 3
  console.log(sumArray(numbers)); // ➞ 46
  console.log(filterArray(numbers, num => num > 5)); // ➞ [10, 20, 8]
  
  console.log(factorial(5)); // ➞ 120
  console.log(isPrime(7)); // ➞ true
  console.log(fibonacciSequence(5)); // ➞ [0, 1, 1, 2, 3]
  