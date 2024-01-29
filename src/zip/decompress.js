import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const gzip = zlib.createGunzip();

    const source = fs.createReadStream(`${ __dirname }/files/archive.gz`);
    const destination = fs.createWriteStream(`${ __dirname }/files/fileToCompress.txt`);

    source.pipe(gzip).pipe(destination);
};

await decompress();