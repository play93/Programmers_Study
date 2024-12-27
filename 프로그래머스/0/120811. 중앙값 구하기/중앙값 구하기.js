function solution(array) {
    const sortArray = array.sort((a,b)=>a-b)
    
    let middleOrder = Math.floor(array.length/2)
    
    let answer = array[middleOrder]
    
    return answer;
    
}