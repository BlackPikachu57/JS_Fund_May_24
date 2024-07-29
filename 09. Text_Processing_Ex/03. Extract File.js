function solve(path) {
    const fileNameExtension = path.split("\\").pop();
    const lastDotIndex = fileNameExtension.lastIndexOf(".");
    const fileName = fileNameExtension.substring(0,lastDotIndex)
    const fileExtension = fileNameExtension.substring(lastDotIndex + 1)
    console.log('File name: ' + fileName);
    console.log('File extension: ' + fileExtension);
}

solve("C:\\Internal\\training-internal\\Template.pptx");