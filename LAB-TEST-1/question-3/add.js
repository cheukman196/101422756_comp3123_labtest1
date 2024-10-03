const fs = require('fs');

// creates one log file and /log directory
const createLogFile = async (filename, data = "Sample log text") => {
    try{
        filename = filename ? filename : "log1.txt"; // default value
        // create /log dir if not exists
        await fs.mkdir("./log", { recursive: true }, (err) => {
            if (err) throw err;
        });
        await fs.writeFile(`./log/${filename}`, data, 'utf-8',(err) => {
            if (err) throw err;
        }); // default 'w' option
        console.log(filename);
    } catch (error){
        console.error(error);
    }
    
}

// creates given amount of log files
const createLogFiles = async (fileCount) =>{
    for (let i = 1; i <= fileCount; i++)
        await createLogFile(`log${i}.txt`);
}

createLogFiles(10);