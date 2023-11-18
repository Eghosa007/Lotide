function countLetters(sentence) {
  const result = {};

  // Loop through each character in the sentence
  for (const char of sentence) {
    // Ignore non-alphabetic characters
    if (/[a-zA-Z]/.test(char)) {
      // Convert the character to lowercase
      const lowerChar = char.toLowerCase();

      // If the character already exists in the result, increment its count
      if (result[lowerChar]) {
        result[lowerChar] += 1;
      } else {
        // If the character is not in the result, add it with a count of 1
        result[lowerChar] = 1;
      }
    }
  }

  return result;
}

// Example usage
const sentence = "Lighthouse Labs";
const letterCounts = countLetters(sentence);

console.log(letterCounts);
