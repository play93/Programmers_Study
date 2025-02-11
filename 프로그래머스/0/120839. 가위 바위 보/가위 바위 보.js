function solution(rsp) {
    let answer = []
    for(let i=0; i<rsp.length; i++){
        if(Number(rsp[i]) === 2){
            answer.push(0)
        }else if(Number(rsp[i]) === 0){
            answer.push(5)
        }else{
            answer.push(2)
        }
    }
    return answer.join('');
}