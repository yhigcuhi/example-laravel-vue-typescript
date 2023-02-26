// Entityの親
export type BaseEntity = {
    // 共通フィールド定義
    readonly id: string // Entity識別子 ※ 登録値はCreateXXXDTOのように扱うので undefinedしない DBにすでに登録されているものを扱うという意味
};
// スタイル関連
export * from './style';
