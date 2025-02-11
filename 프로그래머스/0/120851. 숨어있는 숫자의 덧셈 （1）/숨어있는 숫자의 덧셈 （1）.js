function solution(my_string) {
    let answer=0;
    const sArr = my_string.split('')
    for(let i=0; i<sArr.length; i++){
        if(Number(sArr[i])){
            answer+=Number(sArr[i])
        }
    }
    return answer;
}