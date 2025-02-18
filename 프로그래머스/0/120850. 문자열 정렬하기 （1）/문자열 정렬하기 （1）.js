function solution(my_string) {
    let answer = []
    const strArr = my_string.split("")
    for(let i=0; i<strArr.length; i++){
        if(!isNaN(Number(strArr[i]))){
            answer.push(Number(strArr[i]))
        }
    }
    return answer.sort((a,b)=>a-b);
}