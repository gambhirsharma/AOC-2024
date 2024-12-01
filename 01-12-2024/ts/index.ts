const data = await Bun.file('./input/input.txt').text();

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
    let sum = 0;
    for (let i = 0; i < left.length; i++) {
        sum = sum + Math.abs(left[i] - right[i]);
    }
    console.log(sum);

}

main(data);

// 2285373
