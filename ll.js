/*
// A complete working javascript program
// to demonstrate all insertion methods
// on linked list

// Head of list
var head=null;

// Linked list Node
class Node
{
	constructor(data)
	{
		this.data = data;
		this.next = null;
	}
}

// Inserts a new Node at front
// of the list.
function push(new_data)
{
	// & 2: Allocate the Node & Put in the data
		var new_node = new Node(new_data);

	// 3. Make next of new Node as head
		new_node.next = head;

	// 4. Move the head to point
	// to new Node
	head = new_node;
}

// Inserts a new node after the given
// prev_node.
function insertAfter(prev_node,
					new_data)
{
	// 1. Check if the given Node is null
	if (prev_node == null)
	{
		console.log(
				"The given previous node cannot be null");
		return;
	}

	// 2 & 3: Allocate the Node & Put in the data 
	var new_node = new Node(new_data);

	// 4. Make next of new Node as next
	// of prev_node
	new_node.next = prev_node.next;

	// 5. make next of prev_node as new_node
	prev_node.next = new_node;
}

// Appends a new node at the end. This method is defined inside LinkedList class shown above
function append(new_data)
{
    //1. Allocate the Node &
	//2. Put in the data
	//3. Set next as null 
	var new_node = new Node(new_data);

	// 4. If the Linked List is empty, then make the new node as head
	if (head == null)
	{
		head = new Node(new_data);
		return;
	}

	// 4. This new node is going to be the last node, so make next of it as null
		new_node.next = null;

	// 5. Else traverse till the last node
	var last = head;
	while (last.next != null)
		last = last.next;

	// 6. Change the next of last node
	last.next = new_node;
	return;
}

//This function prints contents of linked list starting from the given node 
function printList()
{
	var tnode = head;
	while (tnode != null)
	{
		console.log(tnode.data + " ");
		tnode = tnode.next;
	}
}

// Driver code

// Start with the empty list

// Insert 6. So linked list becomes
// 6->NUllist
append(6);

// Insert 7 at the beginning. So
// linked list becomes 7->6->NUllist
push(7);

// Insert 1 at the beginning. So
// linked list becomes 1->7->6->NUllist
push(1);

// Insert 4 at the end. So linked list
// becomes 1->7->6->4->NUllist
append(4);

// Insert 8, after 7. So linked list
// becomes 1->7->8->6->4->NUllist
insertAfter(head.next, 8);

console.log(
		"Created Linked list is: ");
printList();
// This code is contributed by gauravrajput1
*/


//que 8

var head=null;
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
//ADD AT BEGNING
function add_at_begning(data){     
    if(head==null){
        head=new Node(data);
        return;
    }
    let temp=head;
    head=new Node(data);
    head.next=temp;
}
//ADD AT END
function add_at_end(data){
    if(head==null){
        head=new Node(data);
        return;
    }
    let temp=head;
    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=new Node(data);
}
//ADD AT POSITION
function add_at_pos(data,pos){
    if(pos==0){
        let temp=head;
        head=new Node(data);
        head.next=temp;
        return;
    }
    let temp=head;
    for(let i=1;i<pos;i++){
        if(temp.next==null){
            temp.next=new Node(data);
            return;
        }
        temp=temp.next;
    }
    let nextEle=temp.next;
    temp.next=new Node(data);
    temp.next.next=nextEle;
}

//DISPLAY FUNCTION
function display(){
    let temp=head;
    while(temp!=null){
        console.log(temp.data+" ");
        temp=temp.next;
    }
}


//DRIVER CODE
add_at_begning(10);
add_at_end(50);
add_at_pos(30,1);
display();


/*
var head=null;
class Node{
	constructor(data){
		this.data=data;
		this.next=null;
	}
}

function addEnd(data){
	if(head==null){
		head=new Node(data);
		return;
	}
	let temp=head;
	while(temp.next !=null){
		temp=temp.next;
	}
	temp.next=new Node(data);
}

function delet_Begining(){
	head=head.next;
}

function delete_End(){
	if(head==null){
		alert("Linked list id empty");
		return;
	}
	else if(head.next==null){
		head=null;
		return;
	}
	let temp=head;
	while(temp.next.next !=null){
		temp=temp.next;
	}
	temp.next=null;
}

function delete_at_pos(pos){
	if(pos==0){
		head=head.next;
		return;
	}
	let temp=head;
	let i;
	for(i=0;i<pos-1;i++){
		if(temp.next==null){
			alert("linked list has only "+i+" items");
		}
		temp=temp.next;
	}
	if(temp.next==null){
		alert("linked list has only "+i+" items");
		return;
	}
	let nextNode=temp.next.next;
	temp.next=nextNode;
}

function display(){
	let temp=head;
	while(temp!=null){
		console.log(temp.data+" ");
		temp=temp.next;
	}
}

addEnd(10);  //10
addEnd(20);  //10 20
addEnd(30);  //10 20 30
addEnd(40);  //10 20 30 40
delete_at_pos(2);  //10 20 40 
delet_Begining();  //20 40
delete_End();    //20
display(); // 20;
*/