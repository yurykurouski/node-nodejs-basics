import { createHash } from "crypto";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const reader = fs.createReadStream(`${ __dirname }/files/fileToCalculateHashFor.txt`);

    reader.on('data', (chunk) => {
        const hash = createHash("sha256").update(chunk).digest("hex");
        console.log(hash);
    });
};

await calculateHash();