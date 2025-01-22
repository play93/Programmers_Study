function solution(array, height) {
    const higherNum = array.filter(h=>h>height)
    return higherNum.length;
}