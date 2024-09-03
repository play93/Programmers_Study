function solution(price, money, count) {
    let num = 0;
    for(let i=1; i<=count; i++){
        num += price * i
    }
    let answer = num-money;
    if(answer < 0) {
        return 0 
    }
    return answer;
}