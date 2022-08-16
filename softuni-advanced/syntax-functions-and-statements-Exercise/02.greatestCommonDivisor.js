function divisor(n1, n2) {
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);
    while (n2) {
        let a = n2;
        n2 = n1 % n2;
        n1 = a;
    }
    console.log(n1);
}
divisor(15, 5);
divisor(2154, 458);