function solution(numbers) {
    const sortNums = numbers.sort((a,b)=>a-b)
    const sliceNums = sortNums.slice(-2)
    return sliceNums[0]*sliceNums[1];
}