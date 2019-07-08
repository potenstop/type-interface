/**
 *
 * 功能描述:
 *
 * @className ILogger
 * @projectName type-interface
 * @author yanshaowen
 * @date 2019/2/23 15:22
 */
export interface ILogger {
    kind: "ILogger";
    getName(): string;
    isTraceEnabled(): boolean;
    trace(msg: string): void;
    trace(msg: string, e: Error): void;
    trace(msg: string, ...args: Object[]): void;
    trace(msg: string, e: Error, ...args: Object[]): void;

    isDebugEnabled(): boolean;
    debug(msg: string): void;
    debug(msg: string, e: Error): void;
    debug(msg: string, ...args: Object[]): void;
    debug(msg: string, e: Error, ...args: Object[]): void;

    isInfoEnabled(): boolean;
    info(msg: string): void;
    info(msg: string, e: Error): void;
    info(msg: string, ...args: Object[]): void;
    info(msg: string, e: Error, ...args: Object[]): void;

    isWarnEnabled(): boolean;
    warn(msg: string): void;
    warn(msg: string, e: Error): void;
    warn(msg: string, ...args: Object[]): void;
    warn(msg: string, e: Error, ...args: Object[]): void;

    isErrorEnabled(): boolean;
    error(msg: string): void;
    error(msg: string, e: Error): void;
    error(msg: string, ...args: Object[]): void;
    error(msg: string, e: Error, ...args: Object[]): void;
}
