var fs = require('fs');

// ### FS Exercises
// fs docs - https://nodejs.org/api/fs.html

// ## Challenge 1:
// Simply print the contents of the text file to the screen.
  let readFile = fs.readFile("./challenge1/info.txt",'utf8', (data,err)=>{
    if (err){
      console.log(err)
    } else {
      console.log(data);
    }
  })

  console.log(readFile)
// ## Challenge 2:
// Add the names of everyone in your group to the end of the text file.
  let names = ["Marko", "Nathan", "Marcus", "Harrison", "Nick", "Dennis", "Lucas", "Greg", "Oscar", "Sam"];
    fs.appendFile("./challenge2/info.txt", names, (data, err)=>{
      if(err){
        console.log(err)
      }else{
          console.log(data);
        }
      });

// ## Challenge 3:
// The file was incorrectly named binfo.txt ... Rename it to info.txt (only using js!)
  fs.rename("./challenge3/binfo.txt", "./challenge3/info.txt", (data,err)=>{
    if (err){
      console.log(err)
    }else {
      console.log(data);
    }
    });
// ## Challenge 4:
// Create a new folder within the challenge4 folder called "copyfolder". Then copy info.txt into that folder.
  // fs.mkdir("./challenge4/copyfolder", (data, err) => {
  //   if(err){
  //     console.log(err);
  //   }else{
  //     fs.copyFile("./challenge4/info.txt", "./challenge4/copyfolder/info.txt", (data,err) {
  //       if(err){
  //         console.log(err);
  //       } else{
  //         console.log(data);
  //       }
  //     });
  //   }
  // });
// ## Challenge 5:
// Replace all of the "-"'s inside the text file with spaces.
  let data = fs.readFileSync("./challenge5/info.txt", "utf8");
      let newData = "";
      for(i=0; i < data.length; i++){
        if(data[i]==="-"){
          newData += " "
        }else {
          newData += data[i]
        }
      };
  fs.writeFileSync('./challenge5/info.txt', newData);
// ## Challenge 6:
// Display all files that end with ".txt". Don't hard code the file names!
