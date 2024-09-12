function solution(s) {
    
    let words = s.split(" ")
    let answerArr = words.map(word =>{
        let splitWord = word.split("")
        for(let i = 0; i < splitWord.length; i++){
        if( i % 2 === 0 ){
            splitWord[i] = splitWord[i].toUpperCase();
        }else{
            splitWord[i] = splitWord[i].toLowerCase()
        }
    }
        return splitWord.join("")
    })
    let answer = answerArr.join(" ")
    return answer;  
}