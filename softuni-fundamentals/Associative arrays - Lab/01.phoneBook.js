function phone(arr) {
    let register = {};

    for (let info of arr) {
      let [key, val] = info.split(' ');
      register[key] = val;
    }
    for (const [key, val] of Object.entries(register)) {
      console.log(`${key} -> ${val}`);
    }
}
phone(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
);