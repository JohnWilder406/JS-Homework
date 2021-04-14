function array255() {
    var newArr=[];
    for (var i = 1; i <= 255; i++) {
        newArr.push(i);
    }
    return newArr;
}

// var array = array255();
// console.log(array);

function even1000() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if(i % 2 == 0) {
            sum = sum + i;
        }
    }

    return sum
}

// var result = even1000();
// console.log(result)

function odd5000() {
    var sum = 0;
    for (var i = 1; i <=5000; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }

    return sum
}

// var result1 = odd5000();
// console.log(result1);

function iterateArray(arr) {
    var sum = 0;
    for (var i = 0; i< arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum
}

// var testArr = [-5,2,5,12];
// var result2 = iterateArray(testArr);
// console.log(result2);

function findMax(arr) {
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }

    return result;
}

// var testArr = [-3, 3,5,7];
// var answer = findMax(testArr);
// console.log(answer);

function findAverage(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    var avg = sum / arr.length;
    return avg
}

// var testArr = [1,3,5,7,20];
// var average = findAverage(testArr);
// console.log(average);

function arrayOdd() {
    var arr = [];
    for (var i = 1; i < 50; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr
}

// var odd = arrayOdd();
// console.log(odd);

function greaterThanY(arr, y) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            result++;
        }
    }

    return result;
}

// var result3 = greaterThanY([1,3,5,7], 3);
// console.log(result3);

function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    return arr;
}

// var result4 = squares([1,5,10,-2]);
// console.log(result4)

function negatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }

    return arr;
}

// var result5 = negatives([1,5,-10,-2]);
// console.log(result5)

function maxMinAvg(arr) {
    var newArr =[0,0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (arr[i] > newArr[0]) {
            newArr[0] = arr[i];
        }
        if (arr[i] < newArr[1]) {
            newArr[1] = arr[i];
        }
    }

    var avg = sum / arr.length;
    newArr.push(avg);

    return newArr;

}

// var test = [1,5,10,-2]
// console.log(maxMinAvg(test));

function swapValues(arr) {
    var l = arr.length-1;
    var temp = arr[0];
    arr[0] = arr[l];
    arr[l] = temp;

    return arr;
}

// console.log(swapValues([1,5,10,-2]));

function numberToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }

    return arr;
}

// console.log(numberToString([-1,-3,2]));