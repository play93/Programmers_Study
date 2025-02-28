function solution(my_string) {
    var answer = [];
    const myArr = my_string.split("")
    for(let i=0; i<myArr.length; i++){
        if(!answer.includes(myArr[i])){
            answer.push(myArr[i])
        }
    }
    return answer.join('');
}