function partyTime(arr) {
  let vip = [];
  let normal = [];
  let index = arr.indexOf("PARTY");
  let secondArr = arr.slice();

  for (const text of arr) {
    if (text === "PARTY") {
      secondArr.splice(0, index + 1);
      break;
    }
    text[0][0] >= 0 && text[0][0] <= 9 ? vip.push(text) : normal.push(text);
  }
  for (const guests of secondArr) {
    if (vip.includes(guests)) {
      vip.splice(vip.indexOf(guests), 1);
    } else if (normal.includes(guests)) {
      normal.splice(normal.indexOf(guests), 1);
    }
  }

  console.log(vip.length + normal.length);
  vip.forEach((guest) => console.log(guest));
  normal.forEach((guest) => console.log(guest));
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);
