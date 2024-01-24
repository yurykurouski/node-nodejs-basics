import { log } from 'console';
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = `${ __dirname }/files`

const FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young'

const create = async () => {
    fs.readdir(FILES_DIR, (err, files) => {
        if (err)
            throw new Error(err);
        else {
            if (files.includes(FILE_NAME)) {
                throw new Error('FS operation failed');
            } else {
                fs.writeFile(`${ FILES_DIR }/${ FILE_NAME }`, FILE_CONTENT, (err) => {
                    if (err) throw new Error();
                })
            }
        }
    })
};

await create();