function solution(a, b) {
    let minNum = a>b ? b : a;
    let maxNum = a>b ? a : b;
let answer = 0;
    for(let i=minNum; i<=maxNum; i++){
        answer += i
    }
   
    return answer;
}