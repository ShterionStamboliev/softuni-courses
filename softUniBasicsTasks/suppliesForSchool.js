function suppliesForSchool(input) {
  const packetOfPens = 5.8;
  const packetOfMarkers = 7.2;
  const cleaningDetergent = 1.2;
  const penPackNumber = Number(input[0]);
  const markerPackNumber = Number(input[1]);
  const cleaningDetergentNumber = Number(input[2]);
  const discountPrice = Number(input[3]);
  const totalPrice =
    penPackNumber * packetOfPens +
    markerPackNumber * packetOfMarkers +
    cleaningDetergentNumber * cleaningDetergent;
  const finalSum = totalPrice - (discountPrice / 100) * totalPrice;
  console.log(finalSum);
}
suppliesForSchool(["2", "3 ", "4 ", "25"]);
