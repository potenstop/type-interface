import {ILogger} from "../../../src";

class Logger implements ILogger {
    debug(msg: string): void;
    debug(msg: string, args: any): void;
    debug(msg: string, ...args: any[]): void;
    debug(msg: string, e: Error): void;
    debug(msg: string, ...args: (any | Error)[]): void {
    }

    error(msg: string): void;
    error(msg: string, args: any): void;
    error(msg: string, ...args: any[]): void;
    error(msg: string, e: Error): void;
    error(msg: string, ...args: (any | Error)[]): void {
    }

    getName(): string {
        return "";
    }

    info(msg: string): void;
    info(msg: string, args: any): void;
    info(msg: string, ...args: any[]): void;
    info(msg: string, e: Error): void;
    info(msg: string, ...args: (any | Error)[]): void {
    }

    isDebugEnabled(): boolean {
        return false;
    }

    isErrorEnabled(): boolean {
        return false;
    }

    isInfoEnabled(): boolean {
        return false;
    }

    isTraceEnabled(): boolean {
        return false;
    }

    isWarnEnabled(): boolean {
        return false;
    }

    trace(msg: string): void;
    trace(msg: string, args: any): void;
    trace(msg: string, ...args: any[]): void;
    trace(msg: string, e: Error): void;
    trace(msg: string, ...args: (any | Error)[]): void {
    }

    warn(msg: string): void;
    warn(msg: string, args: any): void;
    warn(msg: string, ...args: any[]): void;
    warn(msg: string, e: Error): void;
    warn(msg: string, ...args: (any | Error)[]): void {
    }



}
describe("测试 logger", () => {
    it("gen()", async () => {
        let logger = new Logger();
        logger.debug("11", 1, 2 , {a: 1})
        logger.debug("11", 1)
        logger.debug("11", new Error())

        // expect(await modelGen.gen(genConfig)).to.equal(true);

    });
});
