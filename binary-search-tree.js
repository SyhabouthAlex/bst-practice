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
    if (!this.root) {
      this.root = new Node(val);
      return this
    }
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        }
        else {
          current = current.left;
        };
      };
      if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        }
        else {
          current = current.right;
        };
      };
    };
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this
    }
    if (val < node.val) {
      if (node.left === null) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    }
    else if (val > node.val) {
      if (node.right === null) {
        node.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.right)
    };
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      else if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
    };
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return undefined;
    if (val === node.val) return node;
    else if (val < node.val) return this.findRecursively(val, node.left);
    else if (val > node.val) return this.findRecursively(val, node.right);
    return this.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];

    function traverse(node) {
      node && data.push(node.val)
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node && data.push(node.val)
      node.right && traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      node && data.push(node.val);
    }

    traverse(this.root);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return [];
    let data = [];
    let queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      data.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
