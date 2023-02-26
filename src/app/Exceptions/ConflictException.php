<?php

namespace App\Exceptions;

use App\Enums\ErrorStatusCode;
use Throwable;

/**
 * 重複エラー カスタム例外
 */
class ConflictException extends MyHttpException
{
    public function __construct(string $message, string|null $field = null, Throwable|null $previous = null)
    {
        // super コンストラクタ
        parent::__construct(ErrorStatusCode::CONFLICT, $message, $field, $previous);
    }
}
