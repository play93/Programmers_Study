function solution(array, n) {
    let answer = array.filter((num) => n === num).length;
    return answer;
}