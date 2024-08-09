function solution(n)
{
    let answer = 0;
    let numToString = toString(n)
    
    numToString.split('')
    
    let numSplitArr = parseInt(numToString,10);
    console.log(numSplitArr);
    
    for(i=0;i<numSplitArr.length; i++){
        answer += i;
    }
    
    
    return answer;
}