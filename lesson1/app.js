const fs = require('fs');
const path= require('path');

const sort = (read,gender,write)=> {
    fs.readdir(path.join(__dirname, read),(err ,  files) =>{
      if(err)
          return
        console.log(err)
    })
}