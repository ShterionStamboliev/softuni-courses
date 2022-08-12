function extractFile(arr) {
    let text = arr.split('\\').pop();
    let fileName = text.substring(0, text.lastIndexOf('.'));
    let fileExtensions = text.substring(text.lastIndexOf('.') + 1);
    console.log(`File name: ${fileName}\nFile extension: ${fileExtensions}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');