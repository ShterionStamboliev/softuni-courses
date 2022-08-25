function listProcessor(commands) {
  const process = (function () {
      let listOfNames = [];
      const add = str => listOfNames.push(str);
      const remove = text =>
      (listOfNames = listOfNames.filter(name => name !== text));
      const print = () => console.log(listOfNames.join(","));
      return {
        add,
        remove,
        print
      }
  })();
  commands.forEach(command => {
    const [queCommand, orderCommand] = command.split(" ");
    process[queCommand](orderCommand);
  });
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
