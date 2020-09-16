let arr = [];
let correctNumber;
start: while (true) {
  
  var number = prompt("Your pirme number");
  if(number < 0 | null | isNaN(number)){
    continue
  } else {
    correctNumber = number;
    break start;
  }
}
if(number >= 2){
  arr.push(2);
}

for(let i = 2; i <= correctNumber; i++){
  for(let j = 2; j <= i; j++){
    if(i % j == 0) {
      break;
    } 
    if(i == j + 1){
      arr.push(i); 
    }
  }
  
}
alert(arr);
