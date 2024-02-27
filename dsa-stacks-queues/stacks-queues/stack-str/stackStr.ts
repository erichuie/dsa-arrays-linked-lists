import { IndexError } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {

  stack: string[];

  constructor(initial: string[] = []) {
    this.stack = initial;
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    this.stack.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    if(this.stack.length === 0) throw new IndexError();
    return this.stack.pop()!;
  }

  /** peek(): return the value of first item. */
  peek():string {
    if(this.stack.length === 0) throw new IndexError();
    return this.stack[this.stack.length-1];
  }

  /** peek(): return the value of top. */
  isEmpty():boolean {
    return this.stack.length === 0;
  }
}


export { StackStr };
