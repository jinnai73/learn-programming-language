var a = 1;
var z = 15;
var s;
for (var i = a; i <=z; i++) {
    if (i % 15 == 0) {
        s = 'fizzbuzz';
    } else if (i % 3 == 0) {
        s = 'fizz';
    } else if (i % 5 == 0) {
        s = 'buzz';
    } else {
        s = i;
    }
    console.log(s);
}
