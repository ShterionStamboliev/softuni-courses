function subset(arr) {
  
  let currentBiggest = arr[0];

  let max = arr.filter(num => {if (num >= currentBiggest) {
      currentBiggest = num;

  }
return num >= currentBiggest;
});
console.log(max.join(' '));
}

subset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
