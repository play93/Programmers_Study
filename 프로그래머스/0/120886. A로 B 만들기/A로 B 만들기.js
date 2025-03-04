function solution(before, after) {
    const beforeSort = before.split("").sort().join('')
    const afterSort = after.split("").sort().join('')
    return beforeSort===afterSort ? 1 : 0;
}