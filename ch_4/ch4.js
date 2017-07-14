// the sum of a range
// two functions

// first function, range
// takes two inputs, num1 and num2, returns an array containing all the numbers from start up to and including the end

function range(num1, num2, increment){
  var output = []; 
  if (num2 < num1) {
    while (num1 > num2){
      output.push(num1);
      if (increment != null)
        num1 += increment;
      else 
        num1--;
    }
  }
  else {
    for(var i = num1; i <= num2; i++){
      output.push(i);
      if (increment != null)
        i += increment;
    }
  }
  return output;
}

function sum(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

// second function, sum, takes an array of numbers and returns the sume of these numbers

function reverseArray(arr){
  var newArr = [];
  var start = 0;

  for (var i = arr.length-1; i >= 0; i--){
    newArr[start] = arr[i];
    start++;
  } 
  return newArr;
}

function reverseArrayInPlace(arr){
  var temp;
  var i = 0;
  var j = arr.length - 1;

  while (i < j){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

function arrayToList(arr){
  var list = null;
  // we have our array, sort through it, create a node for each element, we'll call this create structure
  for(var i = arr.length-1; i>=0; i--){
    list = {
      value: arr[i],
      rest: list
    }
  }
  return list;
}

function listToArray(list){
  var arr = [];
  for(var node = list; node; node = node.rest){
    arr.push(node.value);
  }

  return arr;
}

function prepend(element, list){
  if(list.rest === null){
    list.rest = {
      value: element,
      rest:null
    }
    return list;
  } else {
      var currentNode = list.rest;
      while(currentNode.rest !== null) {
        currentNode = currentNode.rest;
      }
      currentNode.rest = {
        value: element,
        rest: null
      }
      return list;
  }
}

function nth(list, number){
  // returns the element at the given position in the list, or undefined

  // so i'm going to create a variable, currentPosition = 1
  // then i'll say if list.value === number, return current position, else, create a value currentNode, set it to list.rest, do a while currentNode !== null
  var currentPosition = 1;
  if (list.value === number){
    return currentPosition;
  } else {
    currentNode = list.rest;
    while(currentNode !== null){
      if (currentNode.value === number) {
        currentPosition++;
        return currentPosition;
      } 
      currentPosition++;
      currentNode = currentNode.rest; 
    }
  } 
  return -1;

}

























