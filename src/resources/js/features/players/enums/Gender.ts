export enum Gender {
    MEN = '男性',
    WOMEN = '女性',
}
// enum 拡張
namespace Gender {
    /**
     * valueOf() メソッドの実装
     * @param {string} str Enumキー名
     */
    export function valueOf(str: string) {
        // 対応した Enum値返却
        return Gender[str as keyof typeof Gender];
    }
}
