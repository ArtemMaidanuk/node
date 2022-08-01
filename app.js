const fs = require('fs');
const path = require('path');

const sort = (read, gender, write) => {
    fs.readdir(path.join(__dirname, read), (err, files) => {
        if (err) return console.log(err);

        files.forEach((file) => {
                const readFolder = path.join(__dirname, read, file)
                fs.readFile(readFolder, (err, data) => {
                    if (err) return console.log(err);

                    const user =JSON.parse(data.toString());

                    if(user.gender=== gender) {
                        fs.rename(readFolder, path.join(__dirname,write,file),(err)=>{
                            if(err) return console.log(err);
                        });
                    }
                });
            });
    });
}
sort('boys', "female", 'girls');
sort('girls', "male", 'boys');



