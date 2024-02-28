/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  if(str.length === 0) return true;
  // return str === str.split("").reverse().join("");
  if(str[0] === str[str.length-1]) return isPalindrome(str.slice(1,str.length-1));
  return false;
}

export { isPalindrome };