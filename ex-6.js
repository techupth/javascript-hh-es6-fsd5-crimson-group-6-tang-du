let height = undefined;
let result;

const func = (height) => height ?? "Height is not defined";
result = func(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
