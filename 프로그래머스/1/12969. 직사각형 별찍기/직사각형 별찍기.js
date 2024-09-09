process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    answer = "" // 답을 넣어줄 변수 선언
    for(let i=0; i<b; i++){ // b번 만큼 행 반복
        for(let j=0; j<a; j++){ // a 번 만큼 열 반복
            answer = answer + "*" // a 번 반복 만큼 별 찍어줌 
        }
        answer = answer + "\n" // b번 반복 만큼 줄바꿈 넣어줌
    }
    console.log(answer);
});