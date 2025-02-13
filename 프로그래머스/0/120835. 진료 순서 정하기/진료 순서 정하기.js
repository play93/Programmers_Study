function solution(emergency) {
    const sortEmergency = [...emergency].sort((a,b)=>b-a)
    var answer = emergency.map(a=>sortEmergency.indexOf(a)+1);
    return answer;
}