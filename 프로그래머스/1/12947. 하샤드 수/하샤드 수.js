function solution(x) {
    let numToString = String(x)
    let splitNum = numToString.split("")
    let stringToNum = splitNum.map(Number);
  
    let hNum = stringToNum.reduce((a,b)=>(a+b))
    let answer = x % hNum === 0 ? true : false; 
    return answer;
}