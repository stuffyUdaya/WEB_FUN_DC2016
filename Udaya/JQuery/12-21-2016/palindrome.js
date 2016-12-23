var a  = "a x a";
// for(var i =1;i<=a.length; i++){
  if(a[0]===a[a.length]){
    console.log(a);
  }
// }

// if(a[1] === a[a.length]){
//     for(var i =2;i<=a.length;i++){
//       if(a[i]===a[a.length-i]){
//         console.log("palindrome");
//           }
//   else{
//   console.log("oh!! not a palindrome");
// }
//          }
//       }
// else{
//   console.log("oh!! not a palindrome");
// }


var a  = "b x a";
// for(var i =;i<=a.length; i++){
//   if(a[0]===a[a.length-1]){
//     console.log(a);
//   }
// }

if(a[0] === a[a.length-1]){
    for(var i =1;i<=a.length-1;i++){
      if(a[i]==a[a.length-1-i]){
        continue;
        console.log("palindrome");
          }
  else{
  console.log("oh!! not a palindrome");
}
         }
      }
else{
  console.log("oh!! not a palindrome");
}

########################
// function pal(a){
var a  = "a x a";
// for(var i =;i<=a.length; i++){
//   if(a[0]===a[a.length-1]){
//     console.log(a);
//   }
// }

if(a[0] === a[a.length-1]){
    for(var i =1;i<=a.length-1;i++){
      if(a[i]==a[a.length-1-i]){
        continue;
//         console.log("palindrome");
          }

  else{
  console.log("oh!! not a palindrome");
}
         }
      }
else{
  console.log("oh!! not a palindrome");
}
// }
// var a = "a x a";
// pal(a);
