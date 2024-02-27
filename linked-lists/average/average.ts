import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/

function average(lst: LLStr): number {
  if(lst.head === null) return 0;
  let currNode = lst.head;
  let sum = 0;
  while(currNode){
    sum += Number(currNode.val);
    currNode = currNode.next!;
  }
  return sum / lst.length;
}

export { average };