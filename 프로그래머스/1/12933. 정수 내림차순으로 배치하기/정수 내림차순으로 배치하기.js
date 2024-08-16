function solution(n) {
    let numToString = String(n)
    let splitString = numToString.split("")
    let answerArr = splitString.sort(function(a,b){
        return b-a
    })
    let answer = Number(answerArr.reduce((prev,cur)=>{
        return prev + cur;
    }))
    return answer
}