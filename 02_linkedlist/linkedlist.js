'use strict'

function Node(value, prev, next) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
}

function LinkedList() {}

Linkedlist.prototype.addToTail = function(val) {
    var newNode = new Node(val, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

Linkedlist.prototype.addToHead = function(val) {
    var newNode = new Node(val, null, this.head);
    if (this.head) this.head.previous = newNode;
    else this.tail = newNode;
    this.head = newNode;
}


Linkedlist.prototype.removeHead = function() {
    if (!this.head) return;

    var value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.previous = null;
    else this.tail = null;
    return value;
}



Linkedlist.prototype.removeTail = function() {
    if (!this.tail) return;
    var value = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return value;
}

function isFn(maybeFunc) {
    return typeof maybeFunc === 'function';
}

Linkedlist.prototype.search = function(predicate) {
    var isCorrect = isFn(predicate) ? predicate : function(value) {
        return value == predicate;
    };

    var currentNode = this.head;
    while (currentNode) {
        if (isCorrect(currentNode.value)) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
}
