function sum(...input) {
  // Start coding here !
  const value = input.reduce((acc, total) => {
    return acc + total;
  }, 0);
  return value;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
