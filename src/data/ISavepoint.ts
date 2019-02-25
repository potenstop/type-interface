/**
 *
 * 功能描述:
 *
 * @className Savepoint
 * @projectName type-interface
 * @author yanshaowen
 * @date 2019/1/18 13:28
 */
export interface ISavepoint {
    kind: "ISavepoint";
    getSavepointId();
    getSavepointName();
}
