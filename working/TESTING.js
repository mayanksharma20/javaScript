class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    create(data){
        //create a new node
        var newNode=new Node(data);

        //Special case: Empty list
        if(this.head==null){
            this.head=newNode;
        }
        else{
            let current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=newNode;
        }
        this.size++;
    }

    insertFront(data){
        //create a new node
        var newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
    }

    insertAtPos(data,pos){
        if(this.size<pos){
            console.log("choose range between 0 to "+this.size);
        }
        else{
        let newNode=new Node(data);
        let current=this.head;
            for(var i=0;i<((pos-1)&&(current.next!=null));i++){
                current=current.next;
                newNode.next=current.next;
                current.next=newNode;
            }
        }
        this.size++;
    }
    deleteFront(){
        if(this.head==null){
            console.log("List is Empty");
        }
        else{
            console.log("The deleted element is: ",this.head.data);
            this.head=this.head.next;           
        }
        console.log("Updated list is: ");
        list.display();
        this.size--;
    }

    deleteAtPos(pos){
        var current=this.head;
        for(var i=0;i<(pos) && (current!=null);i++){
            var prev=current;
            current=current.next;
        }
        console.log("The deleted element is: ",current.data);
        prev.next=current.next;        
        console.log("Updated list is: ");
        list.display();
        this.size--;
    }

    deleteEnd(){
        let current=this.head;
        while(current.next!=null){
            var prev=current;
            current=current.next;
        }
        prev.next=null;
        console.log("the Deleted element is: "+current.data);
        console.log("Updated list is: ");
        list.display();
        this.size--;
    }

 
    display(){
        if(this.head==null){
            console.log("List is Empty.");
        }
        else{
            let current=this.head;
            while(current!=null){
                console.log(current.data+" ");
                current=current.next;
            }
        }
    }
}

var list=new LinkedList();
var ch=(prompt("Enter choice"));
while(ch!=0){

    switch(ch){
        case 1: var n=parseInt(prompt("Enter number: "));
                list.create(n);
                break;
    }
}






list.create(30);
list.create(20);
console.log("The element is the SLL are: ");
list.display();
console.log("After insertion at front");
list.insertFront(100);
list.display();
console.log("After insertion at last");
list.create(200);
list.display();
console.log("Ater insertion at given position");
list.insertAtPos(300,3);
list.display();
console.log("After deletion from front");
list.deleteFront();
console.log("After deletion from end");
list.deleteEnd();
console.log("After deletion from given pos");
list.deleteAtPos(2);
//END OF PROGRAM