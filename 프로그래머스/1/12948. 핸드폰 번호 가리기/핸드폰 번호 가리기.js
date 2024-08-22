function solution(phone_number) {
    const frontNum = phone_number.slice(0,-4);
    const backNum = phone_number.slice(-4);
    
    const frontNumLength = frontNum.length
    
    
    
    const answer = "*".repeat(frontNumLength) + backNum
    
    return answer;
}