function solution(my_string, num1, num2) {
    const arrStr = my_string.split("")
    let item = arrStr[num2]
    arrStr[num2] = arrStr[num1]
    arrStr[num1] = item
    let answer = arrStr.join("")

    return answer;
}