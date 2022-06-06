function radiansToDegrees(input) {
    const radian = Number(input[0]);
    const degrees = (radian * 180) / Math.PI;
    console.log(degrees);
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);