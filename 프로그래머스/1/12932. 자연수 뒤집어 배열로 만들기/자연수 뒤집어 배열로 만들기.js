function solution(n) {
    
    let stringNum = String(n) //자연수를 문자열로 변경
    let answerArr = stringNum.split(''); //문자열을 쪼개줌
    let reverseArr = [...answerArr].reverse();
    /*
    answerArr.sort(function(a,b){
        return b - a;
    })//순서를 뒤집어줌
    */
    console.log(reverseArr);
    let answer = reverseArr.map(Number);//map으로 배열에 담긴 문자열을 숫자로 변경
    return answer;
}