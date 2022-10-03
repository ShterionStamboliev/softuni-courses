function request(input) {
    const methods = ['GET','POST','DELETE','CONNECT'];
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriReg = /^[A-z.0-9]+$/gm;
    const messageReg = /^[^<>\\&\'\"]+$/gm;
    
    if (!(input.method && methods.includes(input.method))) {
        throw new Error(`Invalid request header: Invalid Method`);
    };

    if (!(input.uri && (input.uri === '*' || uriReg.test(input.uri)))) {
        throw new Error(`Invalid request header: Invalid URI`);
    };

    if (!(input.version && version.includes(input.version))) {
        throw new Error(`Invalid request header: Invalid Version`);
    };

    if(!(input.hasOwnProperty('message') && (input.message == '' || messageReg.test(input.message)))) {
        throw new Error(`Invalid request header: Invalid Message`);
    };

    return input;
}
request({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  )