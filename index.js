function isPalindrome(word) {
  // Convert the word to lowercase
  const lowerCaseWord = word.toLowerCase();
  // Get the length of the word
  const length = lowerCaseWord.length;
  
  // Loop through the characters in the word
  for (let i = 0; i < length / 2; i++) {
    // Check if the characters at opposite ends of the word are equal
    if (lowerCaseWord[i] !== lowerCaseWord[length - 1 - i]) {
      // If not equal, return false
      return false;
    }
  }
  // If all characters match, return true
  return true;
}

/* 
  Pseudocode:
  1. Convert the word to lowercase to handle case-insensitivity.
  2. Get the length of the word.
  3. Loop through the characters in the word up to half of its length.
  4. Check if the characters at opposite ends of the word are equal.
  5. If any pair of characters are not equal, return false immediately.
  6. If all characters match, return true.

  Written explanation of solution:
  - The function converts the input word to lowercase to handle case-insensitivity.
  - It then iterates through the characters of the word from the beginning and end simultaneously.
  - If at any point, the characters at opposite ends do not match, it returns false immediately, indicating that the word is not a palindrome.
  - If the loop completes without finding any non-matching characters, it means the word is a palindrome, and the function returns true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
