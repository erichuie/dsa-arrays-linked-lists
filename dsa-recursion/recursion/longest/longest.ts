import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if(words === null) return 0;
  if(words.next === null) return words.val.length;

  let longestlength = longest(words!.next)

  return words!.val.length > longestlength ? words!.val.length : longestlength;
}

export { longest };
