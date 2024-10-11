function solution(s) {
    let answer = [];
    let strArr = [];
    for(let i=0; i<s.length; i++){
        if(!strArr.includes(s[i])){
            answer.push(-1)
            strArr.push(s[i])
        }else{
            answer.push(i-strArr.lastIndexOf(s[i]))
            strArr.push(s[i])
        }
    }
    return answer;
}