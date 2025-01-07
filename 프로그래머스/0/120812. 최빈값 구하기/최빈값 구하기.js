function solution(array) {
    
    let countObj = {}
    
    array.forEach(num => {
        countObj[num] = (countObj[num] || 0) + 1
    })
    
    const maxCount = Math.max(...Object.values(countObj))
    
    const maxCountKey = Object.keys(countObj).filter(key => countObj[key] === maxCount).map(Number)
    
    if(maxCountKey.length < 2){
        return maxCountKey[0]
    }else{
        return -1
    }
}