function solution(n, m) {
    let answer = [];
    let maxNum = 1; // 최대공약수
    
    //최대공약수
    for(let i=2; i<=Math.min(n,m); i++){
        if(n % i === 0 && m % i === 0){
            maxNum=i
        }
    }
    answer.push(maxNum)
    
    //최소공배수
    let minNum = n * m / maxNum
    answer.push(minNum)
    
    
    return answer;
}