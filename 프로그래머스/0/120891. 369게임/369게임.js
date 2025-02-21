function solution(order) {
    const num = [3,6,9]
    let answer = String(order).split('').filter((a)=>num.includes(Number(a))).length
    return answer;
}