/**
 *
 * 功能描述:
 *
 * @className ICommonDataSource
 * @projectName type-interface
 * @author yanshaowen
 * @date 2019/1/17 12:55
 */
export interface ICommonDataSource {
    kind: "ICommonDataSource";
    getLogWriter(): () => {};
    setLogWriter(printWrite: () => {}): void;
    getLoginTimeout(): number;
    setLoginTimeout(seconds: number): void;
    build(): any;
}
