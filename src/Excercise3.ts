function BigZ(data: number[][]): number[] {
    let arr: number[] = [];
    let index = 0;
    let j = 0;
    if (data.length === 0)
        return [];
    if (data.length === 1)
        return data[0];
    arr.push(data[0][0], data[1][0]);
    data[0][0] = null;
    data[1][0] = null;
    while (index < data.length) {
        j = 0;
        while (j < data[index].length) {
            if (data[index][j]) {
                arr.push(data[index][j]);
                data[index][j] = null;
            }
            if (data[index + 1] && data[index + 1][j - 1]) {
                arr.push(data[index + 1][j - 1]);
                data[++index][--j] = null;
            } else {
                /*  if (data[index + 1] && data[index][j + 1]) {
                     arr.push(data[index][++j]);
                     data[index][j] = null;
                     if (data[index - 1] && data[index - 1][j + 1]) {
                         arr.push(data[--index][++j]);
                         data[index][j] = null;
                     }
                 } else */
                if (data[index - 1] && data[index - 1][j + 1]) {
                    arr.push(data[--index][++j]);
                    data[index][j] = null;
                } else if (data[index] && data[index][j + 1]) {
                    arr.push(data[index][++j]);
                    data[index][j] = null;
                } else j++;
            }
        }
        index++;
    }
    return arr;
}

//console.log(BigZ([[1, 2], [4, 5], [7, 8, 9,12]]));