<?php

namespace App\Exceptions;

use App\Enums\ErrorStatusCode;
use Throwable;

/**
 * その他エラー カスタム例外
 */
class InternalServerException extends MyHttpException
{
    public function __construct(string $message, string|null $field = null, Throwable|null $previous = null)
    {
        // super コンストラクタ
        parent::__construct(ErrorStatusCode::INTERNAL_SERVER_ERROR, $message, $field, $previous);
    }
}
