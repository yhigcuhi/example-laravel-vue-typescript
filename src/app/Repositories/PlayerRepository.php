<?php

namespace App\Repositories;

use App\Models\Players;
use Illuminate\Database\Eloquent\Collection;

/**
 * 選手リポジトリ インターフェイス
 */
interface PlayerRepository
{
    /**
     * 一覧 取得
     * @return Collection 一覧
     */
    public function getAll(): Collection;

    /**
     * 指定検索条件の検索実行
     * @param array $condition 検索条件
     * @return Collection 検索結果
     */
    public function findBy(array $condition): Collection;

    /**
     * 新規登録実行
     * @param array $input 登録値
     * @return Players 登録結果
     */
    public function create(array $input): Players;
}
