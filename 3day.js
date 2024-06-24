const countChar = (word, targetWord) => {
  word = word.toLowerCase();
  const strArr = word.split('');
  targetWord = targetWord.toLowerCase();

  
  totalcount = strArr.reduce((acc, current) => {
    if (current === targetWord) {
      acc++;
    }
    return acc;
  }, 0);
  return totalcount
};

console.log(countChar('ASbsachaia', 'a'));
