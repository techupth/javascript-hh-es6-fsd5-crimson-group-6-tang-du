const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english;
console.log("🚀 ~ file: ex-7.js:7 ~ result1:", result1);

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores?.english ?? `English score is not defined`;
console.log("🚀 ~ file: ex-7.js:18 ~ result2:", result2);
