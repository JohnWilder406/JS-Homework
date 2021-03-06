var arr = [8,6,7,5,3,0,9]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// prediction:
// arr.length = 7
// i = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 (loop stops)
// arr[i] = 8 -> 6 -> 7 -> 5 -> 3 -> 0 -> 9

// console:
// 8,6,7,5,3,0,9

var arr = [7,3,8,4,2,0,1]
for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i]);
    } else {
        console.log("That is odd!");
    }
}

// prediction:
// arr.length = 7
// i = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7(loop stops)
// arr[i] = 7 -> 3 -> 8 -> 4 -> 2 -> 0 -> 1

// console:
// "That is odd!", "That is odd!", 8, 4, 2, 0, "That is odd!"

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    } else if(arr[i] == 0) {
        arr[i] = "Zero";
    } else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

// prediction:
// arr.length = 8
// i = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 (loop ends)
// arr[i] = 1 -> -1, 3 -> -3, 8 -> -8, -5 -> 5, 0 -> "Zero", -2 -> 2, 4 -> -4, -1 -> 1

// arr = [-1, -3, -8, 5, "Zero", 2, -4, 1]
// newArr= [-5, -2, -1]