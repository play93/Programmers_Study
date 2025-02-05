function solution(my_string, letter) {
    return my_string.split(letter).join("")
    //return my_string.split("").filter((str)=>!letter.includes(str)).join("")
}