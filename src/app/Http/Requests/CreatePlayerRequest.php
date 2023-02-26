<?php

namespace App\Http\Requests;

use App\Enums\Gender;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

/**
 * 選手登録 リクエスト
 */
class CreatePlayerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // 一旦 許可
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'last_name' => ['required', 'string', 'min:1', 'max:15'], // 名前（姓）
            'first_name' => ['required', 'string', 'min:1', 'max:15'], // 名前（名）
            'last_name_kana' => ['required', 'string', 'regex:/^[ぁ-んー]+$/u', 'min:1', 'max:15'], // ふりがな（姓）
            'first_name_kana' => ['required', 'string', 'regex:/^[ぁ-んー]+$/u', 'min:1', 'max:15'], // ふりがな（名）
            'belong_team_cd' => ['required', 'exists:teams,team_cd'], // 所属チームコード
            'gender' => ['required', new Enum(Gender::class)], // 性別
        ];
    }
}
