const oddSquares = (arr)=>{
const oddNumbers= arr.filter(number => number%2 === 1)

console.log(oddNumbers)
const squaredNumbers= oddNumbers.map(number => number * number)
return squaredNumbers;


}
