import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  const newStack = new StackStr();
  let reversedStr = "";
  for(const char of str){
    newStack.push(char);
  }

  while(!newStack.isEmpty()){
    reversedStr += newStack.pop();
  }
  return reversedStr;
}

export { stringReversal };