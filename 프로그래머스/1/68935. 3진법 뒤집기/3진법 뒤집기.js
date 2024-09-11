function solution(n) {
    const second = n.toString(3)
    const reverseNum = second.split("").reverse().join("")
    let answer = parseInt(reverseNum,3)
    return answer;
}