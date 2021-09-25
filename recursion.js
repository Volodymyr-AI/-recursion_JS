function countdown(n){
  if(n<1){
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  };
};
console.log(countdown(5));
/* return [5, 4, 3, 2, 1] */
/* ------------------------- */

function countDown(n){
  return n < 1 ? []:[n].concat(countDown(n-1));
};
console.log(countDown(5));
/* return [5, 4, 3, 2, 1] */
/* ------------------------- */

function Countdown(n){
  return n<1 ? [] : [n, ...Countdown(n-1)];
};
console.log(Countdown(5));
/* return [5, 4, 3, 2, 1] */
/* ------------------------- */

function rangeOfNumbers(startNum, endNum){
  return startNum === endNum
  ? [startNum]
  : [...rangeOfNumbers(startNum, endNum-1), endNum];
};
console.log(rangeOfNumbers(-2,6));
/* return [-2, -1, 0, 1, 2,
   3,  4, 5, 6] */
/* ------------------------- */