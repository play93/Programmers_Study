function solution(num, k) {
    const numArr = String(num).split('')
    let checkArr = numArr.indexOf(String(k));
    return checkArr === -1 ? -1 : checkArr+1
    
}