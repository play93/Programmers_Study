function solution(left, right) {
    const betweenNum = [];
    for(let i = left; i <= right; i++) {
        betweenNum.push(i);
    }//left 와 right 사이의 숫자를 between에 담아주기
   const divisorNum = betweenNum.map(num => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
        }
       return count;
    });//각 원소들 약수의 갯수를 divisorNum에 담아주기
    
    let answer = 0;
    
    for(let i=0; i<divisorNum.length; i++){
       if (divisorNum[i] % 2 !== 0) {
            answer -= betweenNum[i];
        } else {
            answer += betweenNum[i];
        }
    }
    return answer
}//약수의 개수가 홀수면 빼고 짝수면 더하기
  