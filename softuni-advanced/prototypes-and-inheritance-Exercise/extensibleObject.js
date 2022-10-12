function extensibleObject() {
    const someObj = {};

    someObj.extend = function(temp) {
        for (const [k, v] of Object.entries(temp)) {
            typeof v === 'function' 
            ? Object.getPrototypeOf(someObj)[k] = v 
            : someObj[k] = v;
        }
    };
    return someObj;
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString' 
};
myObj.extend(template);