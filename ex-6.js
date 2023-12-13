let height = undefined;
let result;

function check(height) {
  return (result = height ?? "Height is not defined");
}

check(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
