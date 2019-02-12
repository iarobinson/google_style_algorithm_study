let instructor = {
  firstName: "Ian",
  isInstructor: true,
  favoriteNumbers: [22, 33, 44]
};

console.log(Object.keys(instructor));


console.log(instructor.hasOwnProperty('firstName'));


let names = ["ian", "v", "judy", "ned"];

console.log(names);
names.unshift("Archilles");
console.log(names);
names.shift("Archilles");
console.log(names);
