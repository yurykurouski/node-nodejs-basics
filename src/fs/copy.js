import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_DIR = `${ __dirname }/files`;

const getDirectories = async source =>
    (await readdir(source, { withFileTypes: true }))
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

const copy = async () => {
    const folders = await getDirectories(__dirname);

    if (folders.includes('files_copy') || !folders.includes('files')) {
        throw new Error('FS operation failed');
    }

    fs.cp(FILES_DIR, `${ __dirname }/files_copy`, { recursive: true }, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
