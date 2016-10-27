function BinarySearchTree(value){
    this.value = value;
    this.magnitude = 1;
}

BinarySearchTree.prototype.insert = function(value){
    this.magnitude++;
    var direction = value < this.value ? 'left' : 'right';
    if(!this[direction]) this[direction] = new BinarySearchTree(value);
    else this[direction].insert(value);
}

BinarySearchTree.prototype.contains = function(value){
    if(this.value === value){
        return true;
    } else {
        var direction = value < this.value ? 'left' : 'right';
        if(!this[direction]){
            return false;
        } else {
            return this[direction].contains(value);
        }
    }
};

BinarySearchTree.prototype.depthFirstForEach = function(func, option){
    if(option === 'pre-order') func(this.value);
    if(this.left) this.left.depthFirstForEach(func, option);
    if(option === 'in-order' || !option) return func(this.value);
    if(this.right) this.right.depthFirstForEach(func, option);
    if(option === 'post-order') func(this.value);

    // alternate, using for-loops
    // var stack = [this];
    // var tree;
    // while(stack.length){
    //     tree = stack.pop();
    //     iterator(tree.value);
    //     if(tree.right) queue.push(tree.right);
    //     if(tree.left) queue.push(tree.left);
    // }s

};

BinarySearchTree.prototype.breadthFirstForEach = function(func){
    var queue = [this];
    var tree;
    while(queue.length){
        tree = queue.shift();
        func(tree.value);
        if(tree.left) queue.push(tree.left);
        if(tree.right) queue.push(tree.right);
    }
}

BinarySearchTree.prototype.size = function(){
    return this.magnitude;
}


// Our solution
// 'use strict';

// function BinarySearchTree(num) {
//     this.value = num;
//     this.left = null;
//     this.right = null;
// };

// BinarySearchTree.prototype.insert = function(val) {
//     var direction = val < this.value ? 'left' : 'right';
//     if (!this[direction]) {
//         this[direction] = new BinarySearchTree(val);
//     } else {
//         this[direction].insert(val);
//     };
// };

// BinarySearchTree.prototype.contains = function(val) {
//     function findVal(node) {
//         if (val > node.value && !node.right) {
//             return false;
//         } else if (val < node.value && !node.left) {
//             return false;
//         } else if (val > node.value && node.right) {
//             return findVal(node.right);
//         } else if (val < node.value && node.left) {
//             return findVal(node.left);
//         } else if (val == node.value) {
//             return true;
//         };
//     };

//     return findVal(this);
// };

// BinarySearchTree.prototype.depthFirstForEach = function(func, order) {
//     if(!order){
//         order = 'in-order';
//     }
//     // in-order - left, root, right
//     // pre-order - root, left, right
//     // post-order - left, right, root

//     function sortInOrder(node){
//         if(node.left){
//             sortInOrder(node.left);
//         }

//          func(node.value);

//         if(node.right) {
//              sortInOrder(node.right);
//         }
//     }

//     function sortPreOrder(node){
//         func(node.value);

//         if(node.left){
//             sortPreOrder(node.left);
//         }

//         if(node.right){
//             sortPreOrder(node.right);
//         }
//     }

//     function sortPostOrder(node){
//         if(node.left){
//             sortPostOrder(node.left);
//         }

//         if(node.right){
//             sortPostOrder(node.right);
//         }

//         func(node.value);
//     }

//     if(order === 'in-order'){
//         sortInOrder(this);
//     } else if(order === 'pre-order') {
//         sortPreOrder(this);
//     } else {
//         sortPostOrder(this);
//     }
// };


// BinarySearchTree.prototype.size = function() {
//     var sum = 0;

//     function nodeCounter(node) {
//         if (node) {
//             sum++;
//             nodeCounter(node.left);
//             nodeCounter(node.right);
//         }
//     };
//     nodeCounter(this);

//     return sum;
// };

// function Queue() {
//     this.queue = [];
// };

// Queue.prototype.size = function () {
//     if (typeof this.queue.length === "number") {
//         return this.queue.length;
//     } else {
//         return undefined;
//     }
// };

// Queue.prototype.enqueue = function(string) {
//     this.queue.push(string);
// };

// Queue.prototype.dequeue = function() {
//     return this.queue.shift();
// };

// BinarySearchTree.prototype.breadthFirstForEach = function(depthPusher) {
//     var queue = new Queue();
//     var node = this;
//     queue.enqueue(node);
//     var result = [];

//     while (node = queue.dequeue()) {
//         result.push(node.value);

//         if (node.left) {
//             queue.enqueue(node.left)
//         }
//         if (node.right) {
//             queue.enqueue(node.right)
//         }
//     };

//     for (var i = 0; i < result.length; i++) {
//         depthPusher(result[i]);
//     };
// };

