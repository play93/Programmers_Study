function solution(numbers, direction) {
    let answer = [...numbers];
    if(direction === "right"){
        let lastNum = answer.pop()
        answer.unshift(lastNum)
    }else{
        let firstNum = answer.shift()
        answer.push(firstNum)
    }
    return answer;
}