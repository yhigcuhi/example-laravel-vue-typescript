// 共通 axios 定義
import Axios from 'axios';

// 共通設定するクライアント
const MyAxios = Axios.create({
    baseURL: '/api',
});

// 共通リクエストハンドラー設定
MyAxios.interceptors.request.use(
    // 通常リクエストハンドラー
    (config) => {
        // TODO: CSRF TOKENとか
        return config;
    },
);

// 共通レスポンスハンドラー設定
MyAxios.interceptors.response.use(
    // 通信成功時の共通ハンドラー
    (response) => {
        // TODO: 例えば認証成功のキーを設定するとか
        return response;
    },
    // 通信失敗時の共通ハンドラー
    (error) => {
        // エラーコード別ハンドラー
        switch (error.response.status) {
            // 特定のエラーハンドリング
            case 401: // 認証エラー
            case 500: // システムエラー
                new Error('通信エラー')
                break;
            // それ以外
            default:
                break;
        }
        // TODO:共通アラートなど
        // 失敗処理へ
        return Promise.reject(error);
    }
);
// export 共通クライアント
export default MyAxios;

