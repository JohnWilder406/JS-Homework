var testArr = [6,3,5,1,2,4];

function printAndSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        console.log(`Num ${arr[i]}, Sum ${sum}`);
    }
}

printAndSum(testArr);

function valueTimesPosition(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * i;
    }

    console.log(arr);
}

valueTimesPosition(testArr);