const fs = require('fs').promises;

const deleteLogFiles = async (path = "./log/") => {
    try{
        const files = await fs.readdir(path, 'utf-8');
        for(file of files){
            await fs.unlink(path + file);
            console.log("Deleted file: " + file);
        };
    } catch (error) {
        console.error(error);
    }
} 

const deleteLogDirectory = async (path = "./log/") =>{
    try{
        await fs.rmdir(path);
        console.log(`Deleted directory: ${path}`);

    } catch (error) {
        console.error(error);
    }
}

const deleteAllFiles = async () =>{
    try{
        await deleteLogFiles();
    } finally {
        await deleteLogDirectory();
    }
}

deleteAllFiles();
