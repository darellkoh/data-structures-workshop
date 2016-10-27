// Queue contructor function
function Queue() {
    this.result = [];
    this.head = 0;
    this.tail = 0;
}


Queue.prototype.enqueue = function(value) {
    this.result[this.tail] = value;
    this.tail++;
}


Queue.prototype.dequeue = function() {
    if (!this.size()) return;
    var value = this.result[this.head];

    if (this.head > 99) {
        this.result = this.result.slice(this.head);
        this.tail = this.tail - this.head;
        this.head = 0;
    }
    this.head++;
    return value;
}

Queue.prototype.size = function() {
    return this.tail - this.head;
};
