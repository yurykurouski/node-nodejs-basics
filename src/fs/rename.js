import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = `${ __dirname }/files`;

const rename = async () => {
    fs.rename(
        `${ FILES_DIR }/wrongFilename.txt`,
        `${ FILES_DIR }/properFilename.md`,
        (err) => {
            if (err) throw new Error('FS operation failed');
        });
};

await rename();