function solution(box, n) {
    let answerArr = []
    for(let i=0; i<box.length; i++){
        answerArr.push(Math.floor(box[i]/n))
    }
    let answer = answerArr.reduce((a,b)=>a*b);
    return answer;
}