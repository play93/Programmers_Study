function solution(num) {
    let answer = 0;
    
    for (let i=0; i<500; i++){
        if(num !=1){ //num이 1이 아니면
            num = num%2 == 0? num / 2 : num * 3 + 1;
            //콜라츠 추측을 삼항연산자로 한줄로 묶어서 처리
        }else{ //num이 1이면 콜라츠 추측이 끝나므로 반복횟수 i리턴
						return answer = i;
        }
    }
     return answer = -1;
     //500번이 끝날 때 까지 1이 안나오면 -1리턴
}