for(var num = 0; num < 15; num++){
    console.log(num);
}

// Prediction
// Output logged to console.
// num = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 15 
// (loop stops, 15 is not logged because it doesnt meet the condtion of the loop)
// console:
// 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14

for(var i = 1; i < 10; i+=2) {
    if(i % 3 == 0){
        console.log(i);
    }
}

// Prediction
// Output Logged to console
// i = 1 -> 3 -> 5 -> 7 -> 9 -> 11
// (loop stops, 11 does not meet the condition)

// console:
// 3, 9

for(var j = 1; j <= 15; j++) {
    if( j % 2 == 0) {
        j+=2;
    } else if (j % 3 == 0) {
        j++
    }
    console.log(j);
}

// Prediction
// Output logged to console
// j = 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> 11 -> 12 -> 14 -> 15 -> 16 -> 17
// loop stops, 17 is outside condition. 16 is logged because it occurs *inside* the loop after the condition was checked.

// console:
// 1, 4, 5, 8, 10, 11, 14, 16
