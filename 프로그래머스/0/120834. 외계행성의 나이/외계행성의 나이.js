function solution(age) {
    const alphabet = 'abcdefghij'
    const answer = age.toString().split('').map(s=>alphabet[s]).join('')
    return answer;
}