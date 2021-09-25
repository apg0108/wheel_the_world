function PossibleSpeed(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean): number {

    if (fastest) {
        let maxSpeed = 0;
        for (let i = 0; i < redShirtSpeeds.length; i++)
            redShirtSpeeds[i] > blueShirtSpeeds[i] ? maxSpeed += redShirtSpeeds[i] : maxSpeed += blueShirtSpeeds[i];
        return maxSpeed;
    } else {
        let minSpeed = 0;
        for (let i = 0; i < redShirtSpeeds.length; i++)
            redShirtSpeeds[i] > blueShirtSpeeds[i] ? minSpeed += blueShirtSpeeds[i] : minSpeed += redShirtSpeeds[i];
        return minSpeed;
    }
}

//console.log(PossibleSpeed([5, 5, 3], [3, 6, 7], false));