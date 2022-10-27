const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname,'files','rawFile.txt')
const data = fs.readFileSync(filePath); // blocks here until file is read
console.log(data);
moreWork();

path.join
function moreWork(){
    console.log("More work")
}
