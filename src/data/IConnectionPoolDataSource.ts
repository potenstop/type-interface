/**
 *
 * 功能描述:
 *
 * @className IConnectionPoolDataSource
 * @projectName type-interface
 * @author yanshaowen
 * @date 2019/1/17 13:01
 */
import {ICommonDataSource} from "./ICommonDataSource";
import {IPooledConnection} from "./IPooledConnection";

export interface IConnectionPoolDataSource extends ICommonDataSource {
    kind: "IConnectionPoolDataSource";
    getPooledConnection(): IPooledConnection;
    getPooledConnection(username: string, password: string): IPooledConnection;

}
