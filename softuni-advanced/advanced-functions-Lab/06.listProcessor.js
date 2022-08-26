function listProcessor(commands) {

    
    const process = (() => {
        let listOfNames = [];
        const add = str => listOfNames.push(str);
        const remove = text =>
        (listOfNames = listOfNames.filter(name => name !== text));
        const print = () => console.log(listOfNames.join(","));
        return {
            add,
            remove,
            print,
        }
    })();
    commands.forEach(command => {
        let [queCommand, action] = command.split(" ");
        process[queCommand](action)
    });
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
