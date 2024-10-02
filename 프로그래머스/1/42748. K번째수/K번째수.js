function solution(array, commands) {
    var answer = [];
    //let cutArray = array.split(commands[1])
    for(let i=0; i<commands.length; i++){
        let cutArray = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)
        let findNum = cutArray[commands[i][2] -1]
        answer.push(findNum)
    }
    return answer;
}