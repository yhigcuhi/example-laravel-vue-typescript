<?php

namespace App\Exceptions;

use App\Enums\ErrorStatusCode;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use JsonSerializable;
use RuntimeException;
use Throwable;

/**
 * Http Errorを持ったカスタム例外 共通クラス
 */
abstract class MyHttpException extends RuntimeException implements Responsable, JsonSerializable
{
    /**
     * @var string|null 対象フィールド名 (任意)
     */
    protected string|null $field;

    /**
     * コンストラクタ
     * @param ErrorStatusCode $statusCode
     * @param string $message
     * @param string|null $field
     * @param Throwable|null $previous  [optional] The previous throwable used for the
     */
    public function __construct(ErrorStatusCode $statusCode, string $message, string|null $field = null, Throwable|null $previous = null)
    {
        parent::__construct($message,$statusCode?->value ?? ErrorStatusCode::INTERNAL_SERVER_ERROR->value, $previous);
        $this->field = $field;
    }

    /**
     * レスポンスの形へ
     * @param $request
     * @return JsonResponse レスポンスの形
     */
    public function toResponse($request): JsonResponse
    {
        // JSON レスポンスとして返却
        return new JsonResponse($this->jsonSerialize());
    }

    /**
     * @return array JSONの形へ
     */
    public function jsonSerialize(): array
    {
        return [
            'code' => parent::getCode(), // デフォルト 500
            'message' => parent::getMessage(),
            'filed' => $this->field,
        ];
    }
}
