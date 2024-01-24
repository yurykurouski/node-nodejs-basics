import { log } from 'console';

const parseEnv = () => {
    const values = Object.keys(process.env)
        .filter(value => value.includes('RSS'));

    const result = values.map(value =>
        `${ value }=${ process.env[value] }`);

    log('env: ', result.join('; '));
};

parseEnv();