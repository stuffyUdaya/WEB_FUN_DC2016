var num = 7;
var arr = [0,1];

  for(i=2; i<=num;i++){
  var  sum = arr[i-1]+arr[i-2];
    arr.push(sum);

  }
console.log(sum);
#############

function fib(num){

// var num = 7;
var arr = [0,1];
  if(num===0){
    console.log(arr[0]);
  }
  if(num===1){
    console.log(1);
  }

  if(num>1){
  for(i=2; i<=num;i++){
  var  sum = arr[i-1]+arr[i-2];
    arr.push(sum);

  }
console.log(sum);
}
}
fib(0);
