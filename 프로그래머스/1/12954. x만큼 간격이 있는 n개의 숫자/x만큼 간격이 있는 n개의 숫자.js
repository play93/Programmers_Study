function solution(x, n) {
    let answer = [];
    for(let i=1; i<=n; i++){
        //0부터 시작하면 0으로 곱했을 시 첫 요소는 무조건 0이 나오므로 1로 선언 후 시작
        //x씩 증가하는 숫자를 구해야 하므로 x에 i를 곱해줌
        answer.push(x*i)
        //push는 배열에 데이터값을 넣어줄 때 이용
    }
    return answer
}