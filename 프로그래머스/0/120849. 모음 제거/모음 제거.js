function solution(my_string) {
    const aeiou = ["a","e","i","o","u"]
    const sArr = my_string.split("");
    const fixArr =  sArr.filter((str)=> !aeiou.includes(str)).join("")
    return fixArr;
}