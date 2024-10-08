function solution(numbers) {
    let answer = [];
    let sumArr =[]
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            sumArr.push(numbers[i]+numbers[j])
            answer = [...new Set(sumArr)].sort((a,b)=>a -b)
        }
    }
    return answer;
}