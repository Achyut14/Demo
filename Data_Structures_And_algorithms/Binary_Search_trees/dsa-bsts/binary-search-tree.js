class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null){
          current.left = newNode
          return this;
        }
        current = current.left;
      }
      else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = (currentNode, newVal) => {
      if(currentNode === null) {
        return new Node(newVal);
      }
      if(newVal < currentNode.val){
        currentNode.left = newNode(currentNode.left, newVal);
      } else {
        currentNode.right = newNode(currentNode.right, newVal);
      }
      return currentNode;
    }
    this.root = newNode(this.root, val);
      return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current !== null) {
      if(val === current.val){
        return current;
      } else if (val < current.val) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const current = (node, val) => {
      if(node === null) {
        return undefined;
      }
      if (val === node.val){
        return node;
      } else if (val < node.val){
        return current(node.left, val)
      } else {
        return current(node.right, val)
      }
    };
    return current(this.root, val)

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    const traverse =(node) => {
      if (node === null) return;
      visited.push(node.val);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return visited;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const traverse =(node) => {
      if (node === null) {
        if (node.left !== null) traverse(node.left);
        visited.push(node.val);
        if (node.right !== null) traverse(node.right)
      }

  };
  traverse(this.root);
  return visited;

}
  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node !== null) {
        if (node.left !== null) traverse(node.left);
        if (node.right !== null) traverse(node.right);
        visited.push(node.val);
      }
    }
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [];

    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();

      visited.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
    return visited;

  }

  
}

module.exports = BinarySearchTree;
