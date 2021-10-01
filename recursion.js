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

/* function for sallary counting */
const Salary =(depart)=> { 
  if (Array.isArray(depart)){
    return depart.reduce((prev,current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively called for subdivisions, summing the results
    };
    return sum; 
  };
};
console.log(sumSalaries(company));
/* return 6300 */
/*------------------------------*/

/*---------factorial------------*/
function factorialize(num, factorial = 1) {
  if (num == 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  };
};

factorialize(5);
/* return 120 = 5*4*3*2*1 */
/*------------------------------*/

