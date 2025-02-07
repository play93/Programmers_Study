function solution(sides) {
    const sortSides = [...sides].sort((a,b)=>b-a)
    if(sortSides[0] === sortSides[1] && sortSides[1] === sortSides[2]){
        return 1
    }if(sortSides[0] < sortSides[1] + sortSides[2]){
        return 1
    }else{
        return 2
    }
}