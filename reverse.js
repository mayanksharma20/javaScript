//Reverse of a number
var num=(prompt("Enter a number"));
console.log("The number is "+num+"<br>");
var rev=0;
var a=num%10;
num=parseInt(num/10);
rev=(rev+a)*10;

var b=num%10;
num=parseInt(num/10);
rev=(rev+b)*10;

var c=num%10;
num=parseInt(num/10);
rev=(rev+c)*10;

var d=num;
rev=(rev+d);

console.log("Reverse is "+rev);