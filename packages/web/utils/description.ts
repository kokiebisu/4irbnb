/**
 * Modifies the content which should be displayed initially
 * @param {string} content - The content which must be hidden
 */
export const truncateContent = (content: string, wordCount: number) => {
  const wordArray = content.split(' ');
  const newArray = [];
  for (let i = 0; i < wordCount; i++) {
    newArray.push(wordArray[i]);
  }
  return newArray;
};
