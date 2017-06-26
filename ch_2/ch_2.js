
function hashTagLoop(){
  // make an empty string
  // print it += '#'
  // put it in a while loop starting at 7, decrementing until 0
  var hashTag = ''
  var calls = 0;

  while(calls < 7) {
    hashTag += '#';
    console.log(hashTag);
    calls += 1;
  }
}
// hashTagLoop();

function fizzBuzz(){
  var count = 1;
  while (count <= 100) {
    console.log(count);
    if (count % 3 === 0 && count % 5 !== 0){
      console.log("Fizz");
    } else if (count % 3 !== 0 && count % 5 === 0) {
      console.log("Buzz");
    } else if (count % 3 === 0 && count % 5 === 0) {
      console.log("FizzBuzz");
    } 
    count += 1;
  }
}
// fizzBuzz();

function flipHash(str){
  if (str === '#'){
    return ' ';
  } else {
    return '#';
  }
}

function chessBoard(size){
  var line = '';
  var grid = size * size;
  var count = 1;
  var currentChar = '#';
  while (count < grid) {
    if (count % size === 0){
      line += (flipHash(currentChar) + "\n");    
    } else {
      currentChar = flipHash(currentChar);
      line += currentChar;
    }
    count++;
  }
  console.log(line);

}

chessBoard(8);
chessBoard(16);
