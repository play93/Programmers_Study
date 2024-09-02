function solution(s) {
    
    const sArr = s.split('');
    const sortArr = sArr.sort((a, b) => b.localeCompare(a));
    const upperArr=[]
    const lowerArr=[]
    for (let i=0; i<sortArr.length; i++){
        if(sortArr[i] === sortArr[i].toUpperCase()){
            upperArr.push(sortArr[i])
        }
    }
    for (let i=0; i<sortArr.length; i++){
        if(sortArr[i] === sortArr[i].toLowerCase()){
            lowerArr.push(sortArr[i])
        }
    }
    const answerArr = [...lowerArr, ...upperArr]
    const answer = answerArr.join('')
    return answer
}