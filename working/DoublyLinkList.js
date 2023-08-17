class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    create(data){
        //create a New node
        var newNode=new Node(data);
        //special case: Empty list
        if(this.head==null){
            //set head and tail to newNode
            this.head=this.tail=newNode;
        }
        else{
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
    insertFront(data){
        var newNode=new Node(data);
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
    }

    insertAtPos(data,pos){
        let newNode=new Node(data);
        let p=this.head;
        for(let i=1;i<pos-1&&p.next!=null;i++)
                p=p.next;
            var q=p.next;
            newNode.next=q;
            q.prev=newNode;
            p.next=newNode;
            newNode.prev=p;
    }

    deleteFront(){
        console.log("The deleted element is "+this.head.data);
        this.head=this.head.next;
    }

    deleteEnd(){
        let q=this.tail;
        var p=q.prev;
        console.log("The deleted is "+q.data);
        p.next=null;
    }

    deleteAtPos(pos){
        let p=this.head;
        for(let i=1;i<pos && p!=null;i++)
            p=p.next;
        var q=p.next;
        var r=p.prev;
        r.next=q;
        q.prev=r;
    }

    display(){
        if(this.head==null){
            console.log("List is empty");
        }
        else{
            let current=this.head;
            while(current!=null){
                console.log(current.data);
                current=current.next;
            }
        }
    }
}
var list=new LinkedList();
list.create(10);
list.create(20);
list.create(30);
console.log("Elements in DLL");
list.display();
console.log("After insertion front");
list.insertFront(100);
list.display();
console.log("After innsertion End");
list.create(200);
list.display();
console.log("After insertion at pos");
list.insertAtPos(120,3);
list.display();
console.log("After delete front");
list.deleteFront();
list.display();
console.log("After delete end");
list.deleteEnd();
list.display();
console.log("After delete from pos");
list.deleteAtPos(2);
list.display();
//end