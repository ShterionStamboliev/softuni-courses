function towns(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let [town, latitude, longitude] = arr[i].split(" | ");
    obj.town = town;
    obj.latitude = Number(latitude).toFixed(2);
    obj.longitude = Number(longitude).toFixed(2);
    console.log(obj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
