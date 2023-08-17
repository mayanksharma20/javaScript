A: 5,7,20,10,9,16,23,34;
B: 16,5,4,23,7,15,43,34;
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.next=null;
    }
    createExisting(data){
        for(let i=0;i<data.length;i++){
            this.addEnd(data.s[]);
        }
    }
    addEnd(data){
        if(this.head==null){
            this.head=new Node(data);        
            return;
        }
        let temp=this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=new Node(data);
    }
}