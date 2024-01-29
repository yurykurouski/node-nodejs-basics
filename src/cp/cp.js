import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['src/cp/files/script.js', ...args]);

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.on('close', (code) => {
        process.exit(code);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2',]);
