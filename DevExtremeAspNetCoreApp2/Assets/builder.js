const yargs = require('yargs');
const { execSync } = require('child_process');

const argv = yargs
    .option('output-path', { alias: 'o', demandOption: true })
    .option('mode', { alias: 'm', demandOption: true })
    .argv;

execSync("devextreme-bundler ./devextreme_custom.bundle.config.js", { stdio: 'inherit' });
execSync("webpack build --no-color --mode=" + argv.mode + " --output-path=" + argv.outputPath + "/dist", { stdio: 'inherit' });
