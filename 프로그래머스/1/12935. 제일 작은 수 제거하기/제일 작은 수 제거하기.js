function solution(arr) {
    let answer = []
    const MinNum = Math.min.apply(null,arr)
    console.log(MinNum)
    if (arr.length === 1){
        return answer = [-1]
        console.log(answer)
    }else{
        return answer = arr.filter((min) => min !== MinNum);
    }
}