function solution(hp) {
    const gAntAttack = 5
    const sAntAttack = 3
    const numberOfGAnt = Math.floor(hp/gAntAttack)
    const numberOfSAnt = Math.floor((hp - numberOfGAnt*gAntAttack)/sAntAttack) 
    const numberOfWAnt = hp - ((numberOfGAnt*gAntAttack)+(numberOfSAnt*sAntAttack))
    return  numberOfGAnt + numberOfSAnt + numberOfWAnt;
}