import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readStream = fs.createReadStream(`${ __dirname }/files/fileToRead.txt`);

    readStream.pipe(process.stdout);
};



await read();