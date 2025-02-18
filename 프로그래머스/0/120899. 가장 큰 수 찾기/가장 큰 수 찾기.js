function solution(array) {
    let answer = [];
    const maxNum = Math.max(...array)
    answer.push(maxNum, array.indexOf(maxNum))
    return answer;
}