import os from 'node:os';
import { Worker } from 'worker_threads'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const numCPUs = os.availableParallelism();
const workers = [];

const performCalculations = async () => {
    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: 10 + i });

        worker.postMessage({ workerData: 10 + i });

        workers.push({ status: 'pending' });

        worker.on('message', message => {
            workers[i] = {
                status: 'resolved',
                data: message
            };

            checkAllReceived();
        });

        worker.on('error', () => {
            workers[i] = {
                status: 'error',
                data: null
            };

            checkAllReceived();
        });
    }
};

const checkAllReceived = () => {
    if (workers.every(worker => worker.status !== 'pending')) {
        console.log(workers);
    }
}

await performCalculations();