var t= -1;
var MAX=100;
var a=Array(MAX).fill(0);

function isEmpty(){
    return(t<0);
    console.log("Array is Empty")
}

function push(x){
    if(t>=(MAX-1)){
        console.log("Stack Overflow");
        return false;
    }
    else{
        t+=1;
        a[t]=x;
        console.log(x+" is pushed in stack");
        return true;
    }
}

function pop(){
    if(t<0){
        console.log("Stack underflow");
        return 0;
    }
    else{
        var x=a[t];
        t-=1;
        return x;
    }
}


function peek(){
    if(t<0){
        console.log("Stack underflow");
        return 0;
    }
    else{
        var x=a[t];
        console.log(x+" is the top most element");
        return x;
    }
}

function print(){
    for(i=t;i>-1;i--){
        console.log(" "+a[i]);
    }
}

var ch;
while(ch!=0){
    ch=parseInt(prompt("1 to isEmpty \n 2 to push\n3 to pop\n4 top element \n5 print element \n 0 to EXIT"));
    switch(ch){
        
        case 1: isEmpty();
                     break;
        case 2: var x=parseInt(prompt("Enter number"));
                push(x);
                break;

        case 3: pop();
                    break;
        case 4: peek();
                break;
        case 5: print();
                break;
            default:
}
}
/*
push(20);
push(30);
push(40);
push(50);
pop();
pop();
peek();
print();*/