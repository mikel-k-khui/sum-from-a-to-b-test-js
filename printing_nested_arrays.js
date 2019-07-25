function printItems(array) {
  for (item of array) {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  }
}
const array = ["😎", "💩", "🤗", "😼", "😂"];
printItems(array);
const array2 = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array2);

/* sample solution using iteration
function printItems(array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
}
*/
