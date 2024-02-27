import { LL } from '../common/ll';

/** QueueStr: can remove from start or add to end */

class QueueStr {
  queueLL: LL<string>;

  constructor(initial: string[] = []) {
    this.queueLL = new LL(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this.queueLL.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if (this.queueLL.length === 0) throw new Error();
    return this.queueLL.shift();
  }

  /** peek(): return the value of top. */
  peek(): string {
    if (this.queueLL.length === 0) throw new Error();
    return this.queueLL.getAt(0);
  }

  /** peek(): return the value of top. */
  isEmpty(): boolean {
    return this.queueLL.length === 0;
  }
}


export { QueueStr };
