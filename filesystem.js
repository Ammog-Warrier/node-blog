// const fs= require('fs');

//Read files
// fs.readFile("./hi.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())


// });
//Write files
// fs.writeFile("./hi1.txt","hello let's go bro",()=>{
//     console.log("successfully written");
// });
//delete
// fs.sync and fs.unlink



// const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
//   writeStream.write('\nNEW CHUNK:\n');
//   writeStream.write(chunk);
// });

// piping
// readStream.pipe(writeStream); basically whatever u read gets writtem