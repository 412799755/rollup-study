(function () {
    var DoublyLinkedList = function () {
        this.head = null
        this.tail = null
    }
    var linkedNode = function (data) {
        this.data = data
        this.next = null
        this.prev = null
    }
    DoublyLinkedList.prototype = {
        insert(data){
            var node = new LinkedNode(data);
            if (!this.head) {
                this.head = this.tail = node;
            }
            else {
                this.tail.next = node;
                node.prev      = this.tail;
                this.tail      = node;
            }
            return node;

        },
        remove(data) {

            if (!this.head.next) {
                this.head = this.tail = null;
            }
            else {

                var curr = this.head;

                while (curr) {

                    if (curr.data === data) {

                        curr.prev.next = curr.next;
                        if(curr === this.tail) this.tail = curr.prev;
                        else curr.next.prev = curr.prev;
                        curr = null;

                    }
                    else {
                        curr = curr.next;
                    }

                }

            }

        },
        find(data) {

            var curr = this.head;

            while (curr) {
                if (curr.data === data) {
                    return curr;
                }
                curr = curr.next;
            }

        },
        print() {

            var curr = this.head;

            while (curr) {
                console.log(curr);
                curr = curr.next;
            }

        },
    }
    var myList = new DoublyLinkedList();

    myList.insert('a');
    myList.insert('b');
    myList.insert('c');
    myList.insert('d');
    myList.insert('e');

    myList.remove('b');
    myList.remove('e');
    myList.find('a');
    myList.print();

})()
