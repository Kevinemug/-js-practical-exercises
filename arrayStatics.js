const arrayStats = (arr) =>{
    //sum of all numbers in the array
    let sum = arr.reduce((acc,curr)=> acc+curr)
    //average
let average= (sum/arr.length).toFixed(2)
let av= parseFloat(average)
    //min
let min=arr[0]
for(let i=0; i<arr.length; i++){
    if(arr[i] < min){
min=arr[i]
}
var minimum= min;
}

for(let i=0; i<arr.length; i++){
let max=arr[0]
if(arr[i] > max){
max = arr[i]
}
var maximum =max
}

const statisobj =new Object();
statisobj.max=maximum
statisobj.min=minimum
statisobj.sum=sum
statisobj.average=av

return statisobj;
}
let arr =[1,2,3,4,5]
   console.log(arrayStats(arr))