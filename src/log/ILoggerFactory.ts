/**
 *
 * 功能描述:
 *
 * @className ILoggerFactory
 * @projectName type-interface
 * @author yanshaowen
 * @date 2019/2/23 15:21
 */
import {ILogger} from "./ILogger";

export interface ILoggerFactory {
    kind: "ILoggerFactory";
    getLogger(name: string): ILogger;
}
