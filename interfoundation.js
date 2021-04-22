function sigma(num) {
    var sum = 0;
    for(var i = 1; i<=num; i++) {
        sum+= i;
    }
    return sum;
}

// console.log(sigma(5));

function factorial(num) {
    var product = 1;
    for(var i = 1; i<=num; i++) {
        product *= i;
    }
    return product;
}

// console.log(factorial(5));

function fibonacci(index) {
    if (index == 0 || index == 1) {
        return index;
    };
    var phi = (Math.sqrt(5)+1)/2;
    var numerator = (Math.pow(phi,index)) - (Math.pow((phi*-1),(index*-1)))

    var Fib = numerator/Math.sqrt(5);

    return Math.floor(Fib);
}

// console.log(fibonacci(7));

function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }

    arr.pop();
    return arr.pop();
}

// console.log(secondToLast([42, true, 4, "Liam", 7]));

function nthToLast(arr, n) {
    if (arr.length < n) {
        return null
    }

    return arr[arr.length-n];
}

// var test = [5,2,3,6,4,9,7];
// console.log(nthToLast(test,3));

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    var l = arr[0]
    
    for(var i = 1; i < arr.length; i++) {
        if (arr[i] > l) {
            l = arr[i];
        }
    }

    var lsecond = 0

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > lsecond && arr[j] != l) {
            lsecond = arr[j];
        }
    }
    
    return lsecond;
}

// var test = [42,1,4,3.14,7]

// console.log(secondLargest(test));

function doubleTrouble(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr[i]);
        i++;
    }
    return arr;
}

// var test = [4, "Ulysses", 42, false] 
// console.log(doubleTrouble(test));