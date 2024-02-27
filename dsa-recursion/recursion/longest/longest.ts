import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  // let currLongest = currLongest > words.val.length ? currLongest : words.val.length;
  if(words.next === null) return words.val;
  return longest(words.next)

  if(currLongest < words.val.length) currLongest = words.val.length;
}

export { longest };
