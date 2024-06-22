const findLongestWord = (str) => {
  if (str.trim().lenght === 0) {
    return false;
  }
  words = str.split(' ');

  //1st method
  //   words = words.sort((a, b) => a.length - b.length);
  //   console.log(words);
  //   return words.at(-1)

  //2nd method
  return words.reduce(
    (acc, currentWord) => (currentWord.length > acc.length ? currentWord : acc),
    ''
  );
};

console.log(findLongestWord('Hello its me asim neupane neupant'));
