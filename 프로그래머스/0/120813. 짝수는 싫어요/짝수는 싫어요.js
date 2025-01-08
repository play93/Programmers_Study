function solution(n) {
    var answer = [];
    for(let i=n; i>0; i--){
        if(i%2===1){
            answer.push(i)
        }
    }
    const sortArr = answer.sort((a,b)=>a-b)
    return sortArr;
}