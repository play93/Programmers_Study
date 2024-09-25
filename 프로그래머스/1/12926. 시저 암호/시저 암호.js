function solution(s, n) {
    let answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 배열
    const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 배열
    
    for(let i = 0; i <s.length; i++){
        let currentChar = s[i]
        if (upper.includes(currentChar)){
            let index = upper.indexOf(currentChar)
            let newIndex = (index + n) % 26
            answer += upper[newIndex]
        }else if(lower.includes(currentChar)){
            let index = lower.indexOf(currentChar)
            let newIndex = (index + n) % 26
            answer += lower[newIndex]
        }else if(currentChar === " "){
            answer += " ";
        }
    }
    
    return answer;
}