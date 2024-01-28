import { parentPort } from 'worker_threads'

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.on('message', ({ workerData }) => {
        const data = nthFibonacci(workerData);

        parentPort.postMessage(data);
    });
};

sendResult();