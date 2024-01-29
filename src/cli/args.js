import { log } from 'console';

const parseArgs = () => {
    const result = [];
    const args = process.argv.slice(2);

    let temp = '';
    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            temp = args[i].slice(2);
        } else {
            result.push(`${ temp } is ${ args[i] }`);
            temp = '';
        }
    }

    log(result.join(', '));
};

parseArgs();