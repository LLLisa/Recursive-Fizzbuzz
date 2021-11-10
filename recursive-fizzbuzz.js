function recursiveFizzbuzz(num) {
    if (num === 101) {
        return;
    }
    if (num % 15 === 0) {
        console.log("fizzbuzz");
    } else if (num % 5 === 0) {
        console.log("buzz");
    } else if (num % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(num);
    }
    recursiveFizzbuzz(num + 1);
}

recursiveFizzbuzz(1);
