function BinarySearchTree(value) {
    this.value = value;
    this.magnitude = 1;
}

BinarySearchTree.prototype.insert = function(value) {
    this.magnitude++;
    var direction = value < this.value ? 'left' : 'right';
    if (!this[direction]) this[direction] = new BinarySearchTree(value);
    else this[direction].insert(value);
}

BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) {
        return true;
    } else {
        var direction = value < this.value ? 'left' : 'right';
        if (!this[direction]) {
            return false;
        } else {
            return this[direction].contains(value);
        }
    }
};

BinarySearchTree.prototype.depthFirstForEach = function(func, option) {
    if (option === 'pre-order') func(this.value);
    if (this.left) this.left.depthFirstForEach(func, option);
    if (option === 'in-order' || !option) return func(this.value);
    if (this.right) this.right.depthFirstForEach(func, option);
    if (option === 'post-order') func(this.value);

    // alternate solution using for-loops

    // var stack = [this];
    // var tree;
    // while(stack.length){
    //     tree = stack.pop();
    //     iterator(tree.value);
    //     if(tree.right) queue.push(tree.right);
    //     if(tree.left) queue.push(tree.left);
    // }s

};

BinarySearchTree.prototype.breadthFirstForEach = function(func) {
    var queue = [this];
    var tree;
    while (queue.length) {
        tree = queue.shift();
        func(tree.value);
        if (tree.left) queue.push(tree.left);
        if (tree.right) queue.push(tree.right);
    }
}

BinarySearchTree.prototype.size = function() {
    return this.magnitude;
}
