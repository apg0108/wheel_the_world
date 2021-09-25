function BigZ(data: number[][]): number[] {
    let arr: number[] = [];
    if (data.length === 0)
        return [];
    if (data.length === 1)
        return data[0];
    arr.push(data[0][0], data[1][0]);
    data[0][0] = null;
    data[1][0] = null;
    for (let index = 0; index < data.length; index++)
        for (let j = 1; j < data[index].length; j++) {
            if (data[index][j]) {
                arr.push(data[index][j]);
                data[index][j] = null;
            }            
            if (data[index + 1] && data[index + 1][j - 1]) {
                arr.push(data[index + 1][j - 1]);
                data[++index][--j] = null;
            } else {
                if (data[index + 1] && data[index][j + 1]) {
                    arr.push(data[index][++j]);
                    data[index][j] = null;
                    if (data[index - 1] && data[index - 1][j + 1]) {
                        arr.push(data[--index][++j]);
                        data[index][j] = null;
                    }
                } else if (!data[index + 1]) {
                    if (data[index - 1] && data[index - 1][j + 1]){
                        arr.push(data[--index][++j]);
                        data[index][j] = null;
                    }
                }
            }
        }
    return arr;
}

//console.log(BigZ([[1, 2], [4,5,6], [7,8,9]]));