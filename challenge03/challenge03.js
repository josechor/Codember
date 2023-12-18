const original = "abcd";
const modified = "abcde";
findNaughtyStep(original, modified);
console.log(findNaughtyStep(original, modified));

function findNaughtyStep(original, modified) {
  let index =
    original.length > modified.length ? original.length : modified.length;
  for (let i = 0; i < index; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i];
    }
  }
  return "";
}
