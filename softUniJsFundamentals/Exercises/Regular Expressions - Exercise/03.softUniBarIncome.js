function softUniBarIncome(input) {
    let totalSum = 0;
   
    for (const info of input) {
      if (info === "end of shift") {
        break;
      }
      let match = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*[|](?<count>\d+)[|][^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
      let person = match.exec(info);
      if (person) {
          let sum = Number(person.groups['price']) * Number(person.groups['count']);
          console.log(`${person.groups['customerName']}: ${person.groups['product']} - ${sum.toFixed(2)}`);
          totalSum += sum;
      }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
  }
  softUniBarIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
  ]);
  console.log('*****************');
  softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift'])
  
  