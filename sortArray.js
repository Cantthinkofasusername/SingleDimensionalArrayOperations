let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let mergedList = numbers.concat(names);
numbers.sort((a, b) =>  b - a);
names.sort();

console.log(mergedList);
console.log(numbers);
console.log(names);