
var head=null;
var tail=null;
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.previous = null;
    }
  }  
   
  // function to add a node at the beginning of the list
  
  function add_at_Begin(data) {
      if (head == null && tail==null) {
        head =tail= new Node(data);
        //tail = new Node(data);
        return;
      } 
        let temp=head;
        head=new Node(data);
        head.next = temp;
        temp.previous = head;
        
      }
  

    // function to add a node at the end of the list
    function add_at_End(data){
      if (head == null && tail == null){
        head = tail=new Node(data);
        //tail = new Node(data);
        return;
      }
      else{
        let temp=tail;      
        tail=new Node(data);
        tail.previous= temp;
        temp.next = tail;
      }
      }
    
  
    // function to add a node at a specific position
    function add_at_Pos(data, pos) {
      if (pos == 0) {
        if(head==null && tail==null){
          head=tail=new Node(data);
          //tail=new Node(data);
          return;
        }
        let temp=head;
        head=new Node(data);
        head.next=temp;
        head.prev=head;
        return;
      }
        let temp=head;
        for(let i=0;i<pos;i++){
          if(temp.next==null){
            temp.next=new Node(data);
            tail=temp.next;
            tail.prev=temp;
            return;
          }
          temp=temp.next;
        }
      
    }
  
    // function to print the list
    function printList() {
      let temp=head;
      while (temp !=null) {
        console.log(temp.data+ " ");
        temp = temp.next;
      }
    }
  
  
  // driver code
  //let dll = new DoublyLinkedList();
  add_at_End(55)
  add_at_Begin(5); 
  add_at_End(7);
  add_at_Begin(4); 
  add_at_End(88)
  
  
  printList();

  // Output: 4,5,55,7 ,88

