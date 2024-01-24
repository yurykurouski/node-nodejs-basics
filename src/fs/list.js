import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { log } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = `${ __dirname }/files`;

const list = async () => {
    fs.readdir(FILES_DIR, (err, files) => {
        if (err) throw new Error('FS operation failed');
        log(files);
    });
};

await list();