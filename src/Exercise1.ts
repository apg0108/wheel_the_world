function PossibleSpeed(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest = true): number {

    if (fastest) {
        let maxSpeed = 0;
        for (let i = 0; i < redShirtSpeeds.length; i++) {
            if (redShirtSpeeds[i] > blueShirtSpeeds[i])
                maxSpeed += redShirtSpeeds[i];
            else
                maxSpeed += blueShirtSpeeds[i];
        }
        return maxSpeed;
    } else {
        let minSpeed = 0;
        for (let i = 0; i < redShirtSpeeds.length; i++) {
            if (redShirtSpeeds[i] > blueShirtSpeeds[i])
                minSpeed += blueShirtSpeeds[i];
            else
                minSpeed += redShirtSpeeds[i];
        }
        return minSpeed;
    }
}

console.log(PossibleSpeed([5, 5, 3, 10, 2], [3, 6, 7, 2, 1], false));