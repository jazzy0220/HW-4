console.log("10 random numbers between 1 - 100");
for (let i = 0; i < 100; i++) {
    r = Math.trunc((Math.random() * 100) + 1);
    console.log(r);
}