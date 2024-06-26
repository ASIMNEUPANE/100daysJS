const checkTriangleType = (x, y, z) => {
  const arr = [x, y, z];
  if (x === y && y === z) return 'equilateral'
    
  if (x === y || y === z || x === z) return 'isosceles';

  return 'scalene'
};
console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(3, 5, 6));
