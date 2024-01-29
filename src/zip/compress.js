import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const gzip = zlib.createGzip();

    const source = fs.createReadStream(`${ __dirname }/files/fileToCompress.txt`);
    const destination = fs.createWriteStream(`${ __dirname }/files/archive.gz`);

    source.pipe(gzip).pipe(destination);
};

await compress();