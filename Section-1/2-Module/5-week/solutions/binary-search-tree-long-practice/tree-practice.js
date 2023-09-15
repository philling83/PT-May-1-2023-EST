const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  //!!START
  // Recursive
  if (rootNode.left) {
    return findMinBST(rootNode.left)
  }

  return rootNode.val;

  // //Iterative
  // let currNode = rootNode;

  // while (currNode.left) {
  //   currNode = currNode.left;
  // };

  // return currNode.val
  //!!END
}

function findMaxBST(rootNode) {
  //!!START
  //Recursive
  if (rootNode.right) {
    return findMaxBST(rootNode.right)
  }

  return rootNode.val;

  // //Iterative
  // let currNode = rootNode;

  // while (currNode.right) {
  //   currNode = currNode.right;
  // };

  // return currNode.val

  //!!END
}

function findMinBT(rootNode) {
  //!!START
  //Recursive
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  return min;

  // //Iterative
  // let min = rootNode.val;
  // let queue = [rootNode];

  // while (queue.length) {
  //   let currNode = queue.shift();

  //   if (currNode.val < min) {
  //     min = currNode.val;
  //   };

  //   if (currNode.left) queue.push(currNode.left);
  //   if (currNode.right) queue.push(currNode.right);
  // };

  // return min;

  //!!END
}

function findMaxBT(rootNode) {
  //!!START
  //Recursive
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  return max;

  // //Iterative
  // let max = rootNode.val;
  // let queue = [rootNode];

  // while (queue.length) {
  //   let currNode = queue.shift();

  //   if (currNode.val > max) {
  //     max = currNode.val;
  //   };

  //   if (currNode.left) queue.push(currNode.left);
  //   if (currNode.right) queue.push(currNode.right);
  // };

  // return max;

  //!!END
}

function getHeight(rootNode) {
  //!!START
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
  //!!END
}

function balancedTree(rootNode) {
  //!!START
  let queue = [rootNode];
  while (queue.length) {
    let curr = queue.shift();

    if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    } else return false
  }
  return true
  //!!END
}

function countNodes(rootNode) {
  //!!START
  //Recursive
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);

  // //Iterative
  // let count = 0;

  // let queue = [rootNode];

  // while (queue.length) {
  //   let currNode = queue.shift();
  //   count++;

  //   if (currNode.left) {
  //     queue.push(currNode.left);
  //     // count++;
  //   };

  //   if (currNode.right) {
  //     queue.push(currNode.right);
  //     // count++;
  //   };
  // };

  // return count;

  //!!END
}

function getParentNode(rootNode, target) {
  //!!START
  //Recursive - Ramon's solution Refactored
  if (!rootNode) return;

  if (rootNode.val == target) return null;

  if (rootNode.left?.val === target || rootNode.right?.val === target) {
    return rootNode;
  };

  let left = getParentNode(rootNode.left, target)
  if (left) return left;

  let right = getParentNode(rootNode.right, target)
  if (right) return right;

  //Iterative
  // if (rootNode.val === target) return null;

  // let stack = [rootNode];

  // while (stack.length > 0) {
  //   let current = stack.pop();

  //   if ((current.left && current.left.val === target) ||
  //     (current.right && current.right.val === target)) {
  //     return current;
  //   }

  //   if (current.left) stack.push(current.left);
  //   if (current.right) stack.push(current.right);
  // }

  // return undefined;

  //!!END
}

function inOrderPredecessor(rootNode, target) {
  //!!START
  // Solution 1
  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {

    if (current) {
      stack.push(current);
      current = current.left;

    } else if (!current && stack.length > 0) {
      current = stack.pop();

      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;

    } else {
      break;
    }
  }

  // // Alternate Solution
  // let queue = [rootNode]
  // let idx = 0;

  // while (idx < queue.length) {
  //   if (queue[idx] && queue[idx].left) queue.push(queue[idx].left);
  //   if (queue[idx] && queue[idx].right) queue.push(queue[idx].right);

  //   idx++
  // };

  // let vals = queue.map(node => node.val).sort((a, b) => a - b);

  // if (vals.includes(target)) {
  //   if (vals.indexOf(target) === 0) {
  //     return null;
  //   } else {
  //     return vals[vals.indexOf(target) - 1];
  //   }
  // };

  // return null;

  //!!END
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

  //!!START SILENT
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);

  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;

  // Set target based on parent
  let targetNode;
  let isLeftChild = false;
  if (!parentNode) {
    targetNode = rootNode;
  } else if (parentNode.left && parentNode.left.val === target) {
    targetNode = parentNode.left;
    isLeftChild = true;
  } else if (parentNode.right && parentNode.right.val === target) {
    targetNode = parentNode.right;
  } else {
    throw Error("Algorithm Error: This should never happen");
  }

  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) return null;

  // Case 1: Zero children:
  //   set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeftChild) parentNode.left = null;
    else parentNode.right = null;
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  else if (targetNode.left && targetNode.right) {
    let predecessor = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, predecessor);
    targetNode.val = predecessor;
  }

  // Case 3: One child:
  //   Make the parent point to the child
  else {
    if (targetNode.left) {
      if (isLeftChild) parentNode.left = targetNode.left;
      else parentNode.right = targetNode.left;
    } else {
      if (isLeftChild) parentNode.left = targetNode.right;
      else parentNode.right = targetNode.right;
    }
  }
  //!!END
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
