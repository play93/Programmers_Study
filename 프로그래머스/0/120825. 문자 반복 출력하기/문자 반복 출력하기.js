function solution(my_string, n) {
    const strArr = my_string.split("")
    const answerArr = []
    for(i=0; i<my_string.length; i++){
        for(j=0; j<n; j++){
          answerArr.push(strArr[i])   
        }
    }
    const answer = answerArr.join("")
    return answer;
}