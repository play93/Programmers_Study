function solution(n)
{
    let answer = 0;
    let numToString = String(n)
    
    let arr = numToString.split('')
    
    
    
    for(i=0;i<arr.length; i++){
        answer += parseInt(arr[i]);
    }
    
    
    return answer;
}