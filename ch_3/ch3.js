console.log("Hello ch3");

/*

“Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produce that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.”

*/

function findSolution(target) {
  function find(start, history){
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + "* 3)");
    }
    return find(1, "1");
}


function minimum(arg1, arg2){
  if (arg1 === arg2) 
    return "they are equal";
  else if (arg1 < arg2)
    return arg1;
  else
    return arg2;
}

console.log(minimum(5, 5));
console.log(minimum(65, 324));
console.log(minimum(3, 1));
console.log(minimum("banana", "grape"));

// if zero is even
// if one is odd
// else run function on n-2

function isEven(num){
  if (num < 0)
    return "Invalid num"
  else if (num === 0)
    return "is Even";
  else if (num === 1)
    return "is odd";
  else
    return isEven(num-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));



