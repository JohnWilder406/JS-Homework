function biggie(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big'
        }
    }
    return arr
}

// console.log(biggie([-1,3,5,-5]));

function printLowReturnHigh(arr) {
    var low = 0;
    var high = 0;

    for (var i =0; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
        if (arr[i] < low) {
            low = arr[i];
        }
    }

    console.log(low);
    return high;
}

function printOneReturnAnother(arr) {
    var l = arr.length-2;
    console.log(arr[l]);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}

// console.log(printOneReturnAnother([2,3,4,5,6,7]))

function doubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        x = arr[i] * 2
        newArr.push(x);
    }

    return newArr;
}

// console.log(doubleVision([1,2,3]));

function countPositives(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total++;
        }
    }
    arr[arr.length-1] = total;

    return arr;
}

// console.log(countPositives([-1,1,1,1]))

function evenAndOdds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 && arr[i+1] % 2 == 1 && arr[i+2] % 2 == 1) {
            console.log("That's odd!")
        }
        if (arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0) {
            console.log("Even more so!")
        }
    }
}

// var test1 = [1,1,1,2,2,2]
// var test2 = [2,3,4,4,3,3,1,4]
// var test3 = [3,5,4,4,1,2,4,6]

// console.log(evenAndOdds(test1));
// console.log(evenAndOdds(test2));
// console.log(evenAndOdds(test3));

function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i]++;
        }
        console.log(arr[i])
    }

    return arr;
}

// console.log(incrementTheSeconds(test1));

function previousLengths(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }

    return arr;
}

// console.log(previousLengths(["hello", "dojo", "awesome"]))

function addSeven(arr) {
    var newArr =[];
    for (var i = 0; i < arr.length; i++) {
        newArr.push((arr[i]+7))
    }

    return newArr;
}

// console.log(addSeven([7,8,9]));

function reverseArray(arr) {
    var length = Math.floor(arr.length / 2);
    for (var i = 0; i < length; i++) {
        [arr[i],arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]];
    }

    return arr;
}

//alternate method using built-in Array Reverse function
function reverseArray2(arr) {
    var reverse = arr.reverse();
    return reverse;
}

// test1 = [3,1,6,4,2]
// console.log(reverseArray(test1));
// console.log(reverseArray2(test1));

function outlookNegative(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            var neg = arr[i] * -1;
            newArr.push(neg);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// var test2 = [1, -3, 5];
// console.log(outlookNegative(test2));

function alwaysHungry(arr) {
    var food = 0
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
            food++;
        }
    }
    if (food == 0) {
        console.log("i'm hungry");
    }
}

// var test4 = ['food', 'pear', 'food', 'dog'];
// var test5 = ['ball', 'pancake'];

// console.log(alwaysHungry(test4));
// console.log(alwaysHungry(test5));

function swapCenter(arr) {
    var length = Math.floor(arr.length / 2);
    for (var i = 0; i < length; i += 2) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;

    }
}

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }

    return arr;
}

// var test6 = [3,6,9]
// console.log(scaleTheArray(test6, 17));