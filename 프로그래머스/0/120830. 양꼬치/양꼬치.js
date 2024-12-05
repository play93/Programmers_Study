function solution(n, k) {
    const free = Math.floor(n/10)
    const totalDrink = k - free
    const totalPrice = (n * 12000) + (totalDrink * 2000)
    return totalPrice;
}