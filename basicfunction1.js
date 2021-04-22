// function a() {
//     return 35;
// }

// console.log(a());

//prediction: prints 35 to the console.

// function a() {
//     return 4;
// }

// console.log(a() + a());

//prediction: prints 8 to the console.

// function a(b) {
//     return b;
// }

// console.log(a(2) + a(4));

//prediction: prionts 6 to the console.

// function a(b) {
//     console.log(b);
//     return b*3;
// }

// console.log(a(3));

//prediction: logs 3, returns 9.

// function a(b) {
//     return b*4;
//     console.log(b)[]
// }

// console.log(10);

//prediction: returns 40;

// function a(b) {
//     if (b<10) {
//         return 2;
//     } else {
//         return 4;
//     }
//     console.log(b);
// }

// console.log(a(15));

//prediction: returns 4;

// function a(b,c) {
//     return b*c;
// }

// console.log(10,3);
// console.log(a(3,10));

//prediciton: 10,3 logged to console, then 30.

// function a(b) {
//     for var i = 0; i<10;i++) {
//         console.log(i);
//     }
//     return i;
// }

// console.log(3);
// console.log(4);

//prediciton: logs 3, then 4 to the console.

// function a() {
//     for(var i = 0; i<10; i++) {
//         i = i+2;
//         console.log(i);
//     }
// }

// a();

//prediciton: logs 2, 5, 8, 11
// i = 0 -> 2 -> 3 -> 5 -> 6 -> 8 -> 9 -> 11 -> 12 -> loop ends
// log = 2, 5, 8, 11

// function a(b,c) {
//     for (var i = b; i<c; i++) {
//         console.log(i);
//     }
//     return b*c;
// }

// a (0,10);
// console.log(a(0,10));

//prediction: log = 0,1,2,3,4,5,6,7,8,9, log = 0,1,2,3,4,5,6,7,8,9 and return 0
// i = 0,1,2,3,4,5,6,7,8,9,10
// log = 0,1,2,3,4,5,6,7,8,9

// function a() {
//     for (var i=0;i<10;i++) {
//         for(var j=0;j<10;j++) {
//             console.log(j);
//         }
//         console.log(i);
//     }
// }

//predicition: nothing happens- function wasnt called

// function a() {
//     for(var i=0;i<10;i++) {
//         for(var j=0; j<10; j++) {
//             console.log(i,j);
//         }
//         console.log(j,i);
//     }
// }

//prediction: nothing happense- function wasn't called.

// var z = 10;
// function a() {
//     var z = 15;
//     console.log(z);
// }

// console.log(z);

//prediction: 10

// var z = 10;
// function a() {
//     var z = 15;
//     console.log(z);
// }

// a();
// console.log(z);

//prediction: 15,10

// var z = 10;
// function a() {
//     var z = 15;
//     console.log(z);
//     return z;
// }

// z = a();
// console.log(z);

// z = 10 -> a();
// var z = 15
// prediction: 15, 15