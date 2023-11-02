function sortingHat(num){
  if (num == 10){
    return "Gryffindor";
  }
  else if (num < 10){
    return "Hufflepuff";
  }
  else if (num > 20){
    return "Ravenclaw";
  }
  else {
    return "Ewww I see a Slytherin...";
  }
}
console.log(sortingHat(1));
console.log(sortingHat(10));
console.log(sortingHat(15));
console.log(sortingHat(22));