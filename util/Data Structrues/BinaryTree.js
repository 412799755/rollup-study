(function(){
    var BinaryTree =  function (){
        this.root = null
    }
    var BinaryNode = function(val){
        this.val = val
        this.left = null
        this.right = null
    }
    BinaryTree.prototype = {
       insert(val){
           var node = new BinaryNode(val)
           if(this.root === null){
               this.root = node
           }else{
               this.insertNode(node,this.root)
           }

       },
       insertNode(node,subtree){
            if(!subtree){
                subtree = node
            }else if(node.val < subtree.val){
                subtree.left = this.insertNode(node, subtree.left);
            }  else if (node.val > subtree.val) {
                subtree.right = this.insertNode(node, subtree.right);
            }
            return subtree;
        },
       locate(find){
            if (this.root.val === find) {
                return this.root;
            } else {
                return this.locateNode(find, this.root);
            }
        },
       locateNode(find, subtree){
            if (!subtree) {
                return null;
            } else {
                // found the matching node
                if (find === subtree.val) {
                    return subtree;
                }
                else if (find < subtree.val) {
                    return this.locateNode(find, subtree.left);
                }
                else if (find > subtree.val) {
                    return this.locateNode(find, subtree.right);
                }
            }
        },
       printPreOrder(subtree){
           if (!subtree) {
               return;
           }

           console.log(subtree.val);
           this.printPreOrder(subtree.left);
           this.printPreOrder(subtree.right);
       },
       printInOrder (subtree){
            if (!subtree) {
                return;
            }

            this.printInOrder(subtree.left);
            console.log(subtree.val);
            this.printInOrder(subtree.right);
        },
       printPostOrder (subtree){
            if (!subtree) {
                return;
            }

            this.printPostOrder(subtree.left);
            this.printPostOrder(subtree.right);
            console.log(subtree.val);
        },
       remove(val, subtree) {

            // find the node to remove and its parent

            var node     = null,
                parent   = null,
                dir      = '';
            // ?what's the meaning of subtree
            subtree = subtree || this.root;

            while (subtree) {

                // found node
                if (subtree.val === val) {
                    node = subtree;
                    break;
                }
                else if (val < subtree.val) {
                    parent     = subtree;
                    subtree    = subtree.left;
                    dir        = 'left';
                }
                else if (val > subtree.val) {
                    parent     = subtree;
                    subtree    = subtree.right;
                    dir        = 'right';
                }

            }

            if (!node) {
                return null;
            }

            // case 1 - two children
            if (node.left && node.right) {

                // find the highest node on the left subtree
                // copy it + its parent

                var replacement         = node.left,
                    replacementParent   = node;

                while (replacement.right) {
                    replacementParent   = replacement;
                    replacement         = replacement.right;
                }

                // remove the highest left node
                replacementParent.right = replacement.left;

                // copy children from node to be deleted
                replacement.left = node.left;
                replacement.right = node.right;



                // update parent to point to highest left node
                if (dir) {
                    parent[dir] = replacement;
                }
                // delete root node
                else {
                    this.root = replacement;
                }

            }
            // case 2 - no children
            else if (!node.left && !node.right) {
                parent[dir] = null;
            }
            // case 3 - one child
            else {
                parent[dir] = node.left ? node.left : node.right;
            }

            // cleanup deleted node
            node = null;

        },
       breadthFirstSearch(val) {

            var queue   = [this.root],
                current = null;

            while (queue[0]) {

                current = queue.shift();

                if (val === current.val) {
                    return current;
                }
                else {

                    if (current.left) {
                        queue.push(current.left);
                    }
                    if (current.right) {
                        queue.push(current.right);
                    }

                }

            }

            return null;

        },
    }
    var tree = new BinaryTree();
    tree.insert(20);
    tree.insert(10);
    tree.insert(15);
    tree.insert(16);
    tree.insert(5);
    tree.insert(8);
    tree.insert(25);
    tree.locate(15);
    tree.remove(20);
    tree.breadthFirstSearch(15);
    tree.printPreOrder(tree.root)
})()
