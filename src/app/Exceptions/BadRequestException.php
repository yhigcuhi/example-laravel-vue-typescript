<?php

namespace App\Exceptions;

use App\Enums\ErrorStatusCode;
use Throwable;

/**
 * 入力不正 カスタム例外
 */
class BadRequestException extends MyHttpException
{
    public function __construct(string $message, string|null $field = null, Throwable|null $previous = null)
    {
        // super コンストラクタ
        parent::__construct(ErrorStatusCode::BAD_REQUEST, $message, $field, $previous);
    }
}
