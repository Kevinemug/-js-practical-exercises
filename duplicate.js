

const unique = arr=>{
const uniqueArr = [];
for(let i=0; i<arr.length; i++){
    let isFound=false;
    for(let j=0; j<uniqueArr.length; j++){
    if(arr[i] === uniqueArr[j]){
    isFound=true;
    break;
    }
}


if(!isFound){
    uniqueArr.push(arr[i])
}
}
return uniqueArr;
}
const arrr = [1, 2, 3,3,3,33, 1, 2, 3];


console.log(unique(arrr))


