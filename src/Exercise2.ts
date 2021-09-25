function HowManyCoins(denoms: number[], n: number): number {
    let pos = 1;
    let sum = denoms[0];
    const size = denoms.length;
    while (sum < n && size >= pos) {
        sum += denoms[pos];
        pos++;
    }
    if (pos > size)
        return -1;
    else return pos;

};

//console.log(HowManyCoins([3, 2, 3], 4));