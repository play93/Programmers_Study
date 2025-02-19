function solution(n) {
    const sqrtNum = Math.sqrt(n)
    return isNaN(sqrtNum) ? 2 : (sqrtNum%1 === 0 ? 1 : 2)
}