function solution(numer1, denom1, numer2, denom2) {
    const num = denom1 * numer2 + denom2 * numer1;
  const denom = denom1 * denom2;
console.log(num, denom);
    let maxNum = 1;//최대  숫자는 1로
    //let test = Number.MAX_SAFE_INTEGER;//최소숫자는 이거
    
    
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && denom % i===0) {
      maxNum = i;
    }
      
  }

  return [num/maxNum, denom/maxNum];
}
