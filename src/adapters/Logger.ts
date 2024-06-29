import chalk from "chalk";

export class Logger {
    prefix: string;
    constructor(prefix: string) {
        this.prefix = prefix;
    }

    log(message: string) {
        console.log(`${this.formatPrefix()} ${chalk.white(message)}`);
    }

    info(message: string) {
        console.log(`${this.formatPrefix()} ${chalk.blue('INFO:')} ${chalk.blueBright(message)}`);
    }

    warn(message: string) {
        console.log(`${this.formatPrefix()} ${chalk.yellow('WARNING:')} ${chalk.yellowBright(message)}`);
    }

    error(message: string) {
        console.log(`${this.formatPrefix()} ${chalk.red('ERROR:')} ${chalk.redBright(message)}`);
    }

    success(message: string) {
        console.log(`${this.formatPrefix()} ${chalk.green('SUCCESS:')} ${chalk.greenBright(message)}`);
    }

    private formatPrefix() {
        return `${chalk.gray(new Date().toISOString())} ${chalk.magenta(this.prefix)}`;
    }
}