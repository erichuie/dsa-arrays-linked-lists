/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  //
  push(val: string): void {
    const newNode = new NodeStr(val);
    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode;
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);
    if (this.tail === null) this.tail = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    if (this.head === null) throw new IndexError();

    let currNode = this.head;

    if (currNode.next === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currNode.val;
    }

    while (currNode.next!.next) {
      currNode = currNode.next!;
    }
    const tempNode = currNode.next;

    currNode.next = null;

    this.tail = currNode;
    this.length--;

    return tempNode!.val;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if (this.head === null) throw new IndexError();

    let nodeToReturn = this.head;

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return nodeToReturn.val;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    if (this.head === null) throw new IndexError();

    let currNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === idx) return currNode.val;
      if (currNode.next === null) throw new IndexError();
      currNode = currNode.next;
    }
    throw new IndexError();
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    if (this.head === null) throw new IndexError();

    let currNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        currNode.val = val;
        return;
      }
      if (currNode.next !== null) currNode = currNode.next;
    }

    throw new IndexError();
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    console.log('index %o and val %o', idx, val);
    if (idx < 0 || idx > this.length) throw new IndexError();

    const newNode = new NodeStr(val);

    if (idx === 0) {
      let temp = this.head;
      if (this.length === 0) this.tail = newNode;

      this.head = newNode;
      newNode.next = temp;
      this.length++;
      return;

    }

    let currNode = this.head;
    for (let i = 0; i < this.length; i++) {
      debugger;
      console.log(`in loop currVal:${currNode!.val} tail:${this.tail!.val}`);
      if (i === idx - 1) {
        let temp = currNode!.next;
        currNode!.next = newNode;
        newNode.next = temp;


        // if((temp!.next === null) && (i === this.length - 1)) {
        if ((i === this.length - 1)) {
          this.tail = newNode;
        }
        this.length++;
        return;
      }
      if (currNode!.next !== null) currNode = currNode!.next;
    }

  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if (idx < 0 || idx > this.length) throw new IndexError();
    debugger;

    // if idx is 0 and we are at the end of the LL
    if (idx === 0) {
      let target = this.head;
      if (this.length === 1) {
        this.head = this.tail = null;
        this.length--;
        return target!.val;
      }
      else{
        this.head = this.head!.next;
        this.length--;
        return target!.val;
      }

    }

    //TODO: not catching if idx = 0 and NOT the end of the list
    let currNode = this.head;
    for (let i = 0; i < this.length; i++) {
      debugger;
      if (i === idx - 1) {
        let target = currNode!.next;
        if (i === this.length-1){
          this.tail = currNode;
        }
        currNode!.next = target!.next;
        this.length--;
        return target!.val;
      }
      if (currNode!.next !== null) currNode = currNode!.next;
    }
    return "x";
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};