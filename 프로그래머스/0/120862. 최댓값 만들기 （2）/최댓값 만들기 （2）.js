function solution(numbers) {
    const sortNum1 = [...numbers].sort((a,b) => b-a).splice(0,2)
    const sortNum2 = [...numbers].sort((a,b) => a-b).splice(0,2)
    if(sortNum1[0]*sortNum1[1] > sortNum2[0]*sortNum2[1]){
        return sortNum1[0]*sortNum1[1]
    }else{
        return sortNum2[0]*sortNum2[1]
    }
}