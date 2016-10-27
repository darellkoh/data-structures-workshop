// Review Week Practice
'use strict'

function Node(value, prev, next){
  this.value = value;
  this.next = next || null;
  this.prev = prev || null;
}

function LinkedList(){}

Linkedlist.prototype.addToTail = function(val){
  var newNode = new Node(val, this.tail);
  // if an old tail exists
  if(this.tail) this.tail.next = newNode;
  // if there is not yet a tail, adding a new node to empty list. tail is also head
  else this.head = newNode; // if this.tail does not exist
  this.tail = newNode;
}

Linkedlist.prototype.addToHead = function(val){
  var newNode = new Node(val, null, this.head);
  if(this.head) this.head.previous = newNode;
  else this.tail = newNode; // if this.head does not exist
  this.head = newNode;
}


Linkedlist.prototype.removeHead = function(){
  if(!this.head) return;
  var value = this.head.value;

  this.head = this.head.next;

  if(this.head) this.head.previous = null;
  else this.tail = null;
  return value;
}



Linkedlist.prototype.removeTail = function(){
  // removing from an empty list - underflow
  if(!this.tail) return;
  var value = this.tail.value; // capture val of this tail
  // assign tail to next item on list
  this.tail = this.tail.previous;
  // if there are 2 items on list and you just removed one of them, the last item's next should point to null
  if(this.tail) this.tail.next = null;

  // if there is no tail anymore (you just removed everything), set this.head as null bc there's an empty list
  else this.head = null;
  return value;
}

function isFn(maybeFunc){
  return typeof maybeFunc === 'function';
}

Linkedlist.prototype.search = function(predicate){
  var isCorrect = isFn(predicate) ? predicate : function(value){
    return value == predicate;
  };

  var currentNode = this.head;
  while(currentNode){
    if(isCorrect(currentNode.value)) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}


// Our attempt
// function LinkedList() {
//     this.tail = null;
//     this.head = null;
// }

// LinkedList.prototype.addToTail = function(nodeName) {
//     var newNode = new Node(nodeName);
//         if(this.tail === null){
//             this.head = newNode;
//         }

//         if(this.tail){
//             this.tail.next = newNode;
//             newNode.previous = this.tail;
//         }
//         newNode.next = null;
//         this.tail = newNode;
//     // this.head = this.tail;
//     // this.tail = new Node(nodeName);
// };

// LinkedList.prototype.addToHead = function(nodeName) {
//     var newNode = new Node(nodeName);
//     if(this.tail === null){
//         this.tail = newNode;
//     }

//     if(this.head){
//         this.head.previous = newNode;
//         newNode.next = this.head;
//     };
//     this.head = newNode;

// };

// LinkedList.prototype.removeHead = function() {
//     if(!this.head) {
//         return null;
//     } else {
//         var headValue = this.head.value;
//         if(this.head.next) {
//             this.head = this.head.next;
//             this.head.previous = null;
//         } else {
//             this.head = null;
//             this.tail = null;
//         };
//         return headValue;
//     }
// };

// LinkedList.prototype.removeTail = function() {
//     if(!this.tail) {
//         return null;
//     } else {
//         var tailValue = this.tail.value;
//         if(this.tail.previous) {
//             this.tail = this.tail.previous;
//         };
//         this.tail.next = null;
//         return tailValue;
//     };
// };


// LinkedList.prototype.search = function(searchTerm) {
//     function nodeChecker(searchTerm, node){
//         if(typeof searchTerm === 'string'){
//             if(node.value.valueOf() === searchTerm){
//                 console.log("hello", node.value);
//                 return node.value;
//             } else if(node.next === null) {
//                 return null;
//             } else {
//                 return nodeChecker(searchTerm, node.next);
//             }
//         } else {
//             if(searchTerm(node.value.valueOf())){
//                 return node.value;
//             } else if(node.next === null) {
//                 return null;
//             } else {
//                 return nodeChecker(searchTerm, node.next);
//             }
//         }
//     }
//     return nodeChecker(searchTerm, this.head);
// };

// function Node(value) {
//     this.value = value;
//     this.next = null;
//     this.previous = null;
// };


// Alternative
// 'use strict';

// function Node (value, prev, next) {
//   this.value = value;
//   this.next = next || null;
//   this.previous = prev || null;
// }

// function LinkedList () {}

// LinkedList.prototype.addToTail = function(val) {
//   var newNode = new Node(val, this.tail);
//   if (this.tail) this.tail.next = newNode;
//   else this.head = newNode;
//   this.tail = newNode;
// };

// LinkedList.prototype.removeTail = function() {
//   if (!this.tail) return;
//   var oldVal = this.tail.value;
//   this.tail = this.tail.previous;
//   if (this.tail) this.tail.next = null;
//   else this.head = null;
//   return oldVal;
// };

// // head methods are exact reverses of tail methods

// LinkedList.prototype.addToHead = function(val) {
//   var newNode = new Node(val, null, this.head);
//   if (this.head) this.head.previous = newNode;
//   else this.tail = newNode;
//   this.head = newNode;
// };

// LinkedList.prototype.removeHead = function() {
//   if (!this.head) return;
//   var oldVal = this.head.value;
//   this.head = this.head.next;
//   if (this.head) this.head.previous = null;
//   else this.tail = null;
//   return oldVal;
// };

// function isFn (maybeFunc) { return typeof maybeFunc === 'function'; }

// LinkedList.prototype.search = function(predicate) {
//   var correct = isFn(predicate) ? predicate : function(value){
//     return value == predicate;
//   };
//   var currentNode = this.head;
//   while (currentNode) {
//     if (correct(currentNode.value)) return currentNode.value;
//     currentNode = currentNode.next;
//   }
//   return null;
// };

