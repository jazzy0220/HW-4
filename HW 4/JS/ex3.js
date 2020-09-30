const value = [3, 11, 7, 9, 10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(`Sum of all array values:${(value.reduce(reducer))}`);


const array = [3, 11, 7, 9, 10]

const forLoopMinMax = () => {
  let min = array[0], max = array[0]

  for (let i = 1; i < array.length; i++) {
    let value = array[i]
    min = (value < min) ? value : min
    max = (value > max) ? value : max
  }

  return [min, max]
}

const [forLoopMin, forLoopMax] = forLoopMinMax()
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) 

const minUsingReduce = () => array.reduce((min, currentValue) => Math.min(min, currentValue), array[0])
const maxUsingReduce = () => array.reduce((max, currentValue) => Math.max(max, currentValue), array[0])
console.log(`Minimum: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`) 