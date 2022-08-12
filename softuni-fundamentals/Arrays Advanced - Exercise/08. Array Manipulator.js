function arrayManipulator(nums, commands) {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    let fistCommand = command[0];

    switch (fistCommand) {
      case "add":
        let specifiedIndex = Number(command[1]);
        let specifiedElement = Number(command[2]);
        nums.splice(specifiedIndex, 0, specifiedElement);
        break;

      case "addMany":
        let index = Number(command[1]);
        for (let i = command.length - 1; i >= 2; i--) {
          let currentNum = Number(command[i]);
          nums.splice(index, 0, currentNum);
        }
        break;

      case "contains":
        let containedElement = Number(command[1]);
        if (nums.includes(containedElement)) {
          console.log(nums.indexOf(containedElement));
        } else {
          console.log("-1");
        }
        break;

      case "remove":
        if (nums.length > command[1]) {
          let index = Number(command[1]);
          nums.splice(index, 1);
        }
        break;

      case "shift":
        let shifts = Number(command[1]);
        for (let i = 0; i < shifts; i++) {
          let currentNum = nums.shift();
          nums.push(currentNum);
        }
        break;

      case "sumPairs":
        let sumPairs = 0;
        let sumArr = [];
        if (nums.length % 2 === 1) {
          nums.push(0);
        }
        for (let i = 0; i < nums.length; i += 2) {
          sumPairs = nums[i] + nums[i + 1];
          sumArr.push(sumPairs);
        }
        nums = sumArr;
        break;

      case "print":
        console.log(`[ ${nums.join(", ")} ]`);
    }
  }
}
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
