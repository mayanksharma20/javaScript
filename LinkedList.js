//create a node
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
    InterAtFirst(data){
        var newnode=new Node(data);
        newnode.next=this.head;
        this.head=newnode;
        }
    InterAtEnd(data){
        var newnode= new Node(data);

        //if ll is empty
        if(this.head==null){
            this.head=newnode;
        }else{
            var current;
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=newnode;
        }
        this.size++;
    }
    InterAtPos(data,pos){
        let newnode=new Node(data);
        pos=this.head;

    }

    print(){
        var current=this.head;
        var str=" ";
        while(current){
            str=str+current.data+" ";
            current=current.next;
        }
        console.log(str);
    }
}

var ll=new LinkedList();
ll.InterAtEnd(20);
ll.InterAtEnd(40);
ll.InterAtEnd(60);
ll.InterAtFirst(10);
ll.print();