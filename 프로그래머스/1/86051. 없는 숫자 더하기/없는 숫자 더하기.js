function solution(numbers) {
    let arr=[0,1,2,3,4,5,6,7,8,9]
    let answer=0;
    let numArr = arr.filter(x =>
         !numbers.includes(x))
    
    for (let i=0; i<numArr.length; i++){
        answer += numArr[i];
    }
    return answer
}