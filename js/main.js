
//write a for loop that iterates over numbers 1-100

//if the number is divisible by 5 print "chicken"

//if divisible by 7 print "monkey"

//if both, print "chickenmonkey" - maybe += ?

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 === 0) {
    console.log("ChickenMonkey");
  } else if (i % 5 === 0) {
    console.log("Chicken");
  } else if (i % 7 === 0) {
    console.log("Monkey");
  } else {
    console.log(i);
  }
}

//finished, works