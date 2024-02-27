import { LLNodeNum } from "../common/ll";

/** product: calculate the product of a linked list of numbers. */

function product(nums: LLNodeNum | null): number {
  if(nums === null) return 1;
  return nums.val * product(nums.next);
}

export { product };