var t=-1;
var MAX=100;
var a=Array(MAX).fill(0);

function isEmpty(){
    return(t<0);
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

isEmpty();
push(10);
push(20);
push(30);
push(10);
push(20);
push(30);
pop();
peek();
print();