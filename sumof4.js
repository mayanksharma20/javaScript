//sum of 4 digit number

var num=(prompt("Enter a number"));
document.write("The number is "+num+"<br>");
var a=num%10;
num=parseInt(num/10);
var b=num%10;
num=parseInt(num/10);
var c=num%10;
num=parseInt(num/10);
var d=num%10;
num=parseInt(num/10);

var sum=a+b+c+d;
document.write("Sum is "+sum);