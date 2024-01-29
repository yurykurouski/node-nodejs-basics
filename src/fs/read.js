import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { log } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = `${ __dirname }/files`;

const read = async () => {
    fs.readFile(
        `${ FILES_DIR }/fileToRead.txt`,
        'utf8',
        (err, data) => {
            if (err) {
                throw new Error('FS operation failed');
            }

            log(data);
        });
};

await read();