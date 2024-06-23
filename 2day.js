const generateHash = (str) => {
  if (str.trim().length === 0 || str.length > 200) {
    return false;
  }

  str = str.trim().split(' ');

  str = str.map((strs) => {
    // return strs.replace(strs[0], strs[0].toUpperCase());
    return strs.charAt(0).toUpperCase() + strs.slice(1);
  });

  let result = str.join(''); // Join the array into a single string
  let resultArray = result.split(''); // Convert the string into an array of characters
  resultArray.unshift('#'); // Add '#' as the first element in the array

  return resultArray.join('');
};

console.log(generateHash('hy name is lakhan '));
