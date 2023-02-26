<?php

namespace App\Repositories;

use App\Models\Teams;
use Illuminate\Database\Eloquent\Collection;

/**
 * チームリポジトリ インターフェイス
 */
interface TeamRepository
{
    /**
     * 一覧 取得
     * @return Collection 一覧
     */
    public function getAll(): Collection;

    /**
     * 指定キー検索
     * @param string $team_cd 検索キー
     * @return Teams|null 検索結果
     */
    public function findById(string $team_cd): ?Teams;
}
