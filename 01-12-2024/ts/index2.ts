const data = await Bun.file('./input/input2.txt').text();

const main = async (data: string) => {
    const left: number[] = [];
    const right: number[] = [];

    const regex = /(\d+)\s+(\d+)/g;

    for (const match of data.matchAll(regex)) {
        left.push(parseInt(match[1]));
        right.push(parseInt(match[2]));
    }
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    if (left.length !== right.length) {
        console.log('Error');
        return;
    }

    let occur = 0;
    let array: number[] = [];
    left.forEach((value, index) => {
        for (let i = 0; i < right.length; i++) {
            if (value === right[i]) occur += 1
        }
        array.push(value * occur)
        occur = 0
    })
    //console.log(sum.reduce((a, b) => a + b, 0));

    console.log(array.reduce((a, b) => a + b, 0));
}

main(data)
