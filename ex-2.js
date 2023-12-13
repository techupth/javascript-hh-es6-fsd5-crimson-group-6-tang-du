let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
let { scores, ...rest } = studentProfile;
console.log({ scores, ...rest });
let newStudentProfile = { ...rest, scores: { ...scores, ...studentScores } };
console.log(newStudentProfile);
