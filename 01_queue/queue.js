// Review Week Practice
// Queue - First In, First Out - without using Array prototype properties

// var q1 = new Queue();
// var q2 = new Queue();

// does 4 things
// 1. {}
// 2. Queue()
// 3. sets this to that of {}
// 4. {}.__proto__ ==> Queue.prototype
// 5. It runs the func and returns the obj


// Queue contructor function
function Queue() {
    this.result = [];
    this.head = 0; // where I get out of queue
    this.tail = 0; // where I enter queue
}

// adding item to queue (to front)
Queue.prototype.enqueue = function(value){
    this.result[this.tail] = value;
    // once I add the item, I want the tail to point to next item I want to add, so increment
    this.tail++;
}

// removing item from queue (from front)
Queue.prototype.dequeue = function(){
	if(!this.size()) return;
	var value = this.result[this.head];

	if(this.head > 99){
		this.result = this.result.slice(this.head);
		this.tail = this.tail - this.head;
		this.head = 0;
	}
	this.head++;
	return value;
}

Queue.prototype.size = function(){
	return this.tail - this.head;
};



// // Own Attempt
// function Queue() {
//     this.queue = [];
// }

// Queue.prototype.size = function () {
//     return this.queue.length;
// };

// Queue.prototype.enqueue = function(string) {
//     this.queue.push(string);
// };

// Queue.prototype.dequeue = function() {
//     return this.queue.shift();
// };


// Alternative

// function Queue() {
//     this.data = []; // stores elements
//     this.head = 0; // where I dequeue
//     this.tail = 0; // where I enqueue
// }

// Queue.prototype.enqueue = function(value) {
//     this.data[this.tail] = value;
//     this.tail++; // because push increases .length by 1
// };

// // with amortized garbage collection
// Queue.prototype.dequeue = function() {
//     if (!this.size()) return; // returns undefined by default
//     var value = this.data[this.head];
//     //this.data[this.head++] // operator, slightly confusing
//     // not the same as the pre-increment operator
//     if (this.head > 99) {
//         this.data = this.data.slice(this.head);
//         this.tail = this.tail - this.head;
//         this.head = 0; // new head value
//     }

//     this.head++;
//     return value;

// };

// Queue.prototype.size = function() {
//     return this.tail - this.head; // diff is the size
// };

// // underflow - dequeing from an empty queue

// // overflow - enqueue is adding to a queue to a queue that's already maxed out
