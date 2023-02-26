<?php

namespace App\Enums;

/**
 * エラーステータスコード定義s
 */
enum ErrorStatusCode: int
{
    // 利用するであろうコードのみ記載
    case BAD_REQUEST = 400; // 引数エラー系
    case UNAUTHORIZED = 401; // 未認証系
    case FORBIDDEN = 403; // 権限なし系
    case NOT_FOUND = 404; // 見つからない系
    case CONFLICT = 409; // 重複エラー
    case INTERNAL_SERVER_ERROR = 500; // その他サーバーエラー
}
