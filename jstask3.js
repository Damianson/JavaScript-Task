function yugioh(n) {
    let x = [];

    for ( let i = 1; i <= n; i++) {
        if ( i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ) {
            x.push("yu-gi-oh");
        } else if ( i % 2 == 0 && i % 3 == 0 ) {
            x.push("yu-gi");
        } else if ( i % 2 == 0 && i % 5 == 0 ) {
            x.push("yu-oh");
        } else if ( i % 3 == 0 && i % 5 == 0) {
            x.push("gi-oh");
        } else if ( i % 2 == 0 ) {
            x.push("yu");
        } else if ( i % 3 == 0 ) {
            x.push("gi");
        } else if ( i % 5 == 0 ) {
            x.push("oh");
        } else {
            x.push(i);
        };
    };

    return x;
};

console.log(yugioh(30));
