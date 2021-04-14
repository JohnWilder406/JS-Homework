function printOdds() {
    for(var i=1; i<=20; i++) {
        if(i % 2 == 1) {
            console.log(i)
        }
    }
}

printOdds();

function sumAndPrint() {
    let sum = 0

    for(num=1; num<=5; num++) {
        console.log(`Num: ${num}`);
        sum = num + sum;
        console.log(`Sum: ${sum}`);
    }
}

sumAndPrint();