class StackNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class StackLL{
    constructor(){
        this.top=null;
    }
    push(data){
        var newNode=new StackNode(data);
        newNode.next=this.top;
        this.top=newNode;
    }
    pop(){
        if(this.top==null)
        console.log("Stack is empty");
        else{
            console.log("The value is popped ",this.top.data);
            this.top=this.top.next;
        }
    }
    display(){
        if(this.top==null)
        console.log("Stack is empty");
        else{
            var p=this.top;
            while(p!=null){
                console.log(p.data);
                p=p.next;
            }
        }
    }
}

var s=new StackLL();
s.push(10);
s.push(20);
console.log("Element is the stack are");
s.display();
s.pop();
console.log("Element is the stack are");
s.display();
s.pop();
s.pop();