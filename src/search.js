const fs = require("fs");
const readline = require('readline'); //nodejs native module

var args = process.argv;
if(args.length != 5 || isNaN(process.argv[3])){
    console.error("ERROR command line args");
    return -1;
}
    

var file_path = process.argv[2];
var row_index = process.argv[3];
var search_key = process.argv[4];

const readInterface = readline.createInterface({
    input: fs.createReadStream(file_path)
                .on('error', () => {//event emitted if file not found
                                    console.error("ERROR command line args"); 
                                    return -1;
                                })
});

//event 'line' emitted when there is a \n or \r or \r\n in input
readInterface.on('line', (line) => {
    let l = line.replace(";","");
    let array = l.split(",");

    if(array[row_index] == search_key)
        console.log(l + ";");
});