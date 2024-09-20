function solution(sizes) {
    let wMax = 0;
    let hMax = 0;
    
    for(let i=0; i<sizes.length; i++){
        let w = Math.max(sizes[i][0], sizes[i][1]);
        let h = Math.min(sizes[i][0], sizes[i][1]);
    
        wMax = Math.max(wMax, w);
        hMax = Math.max(hMax, h);
    }
    return wMax*hMax
}