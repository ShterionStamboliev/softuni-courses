function guineaPig(arr) {
    let quantityFood = arr[0] * 1000;
    let quantityHay = arr[1] * 1000;
    let quantityCover = arr[2] * 1000;
    let guineaWeight = arr[3] * 1000;
    let days = 30;
    let food = 300;
    let day = 0;
    let hayNeeded = 0;
    let pigWeight = 0
  
    for (let i = 1; i <= days; i++) {
      day++;
      quantityFood -= food;
      if (day % 2 === 0) {
        hayNeeded = quantityFood * 0.05;
        quantityHay -= hayNeeded;
      } else if (day % 3 !== 0) {
        pigWeight = guineaWeight / 3;
        quantityCover -= pigWeight;
      }
    }
    if (quantityFood > 0 && quantityHay > 0 && quantityCover > 0) {
      console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood / 1000).toFixed(2)}, Hay: ${(quantityHay / 1000).toFixed(2)}, Cover: ${(quantityCover / 1000).toFixed(2)}.`);
    } else {
      console.log(`Merry must go to the pet store!`);
    }
  }