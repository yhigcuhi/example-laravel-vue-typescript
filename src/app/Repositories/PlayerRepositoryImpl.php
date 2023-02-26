<?php

namespace App\Repositories;

use App\Models\Players;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

/**
 * 選手リポジトリ 実装
 */
class PlayerRepositoryImpl implements PlayerRepository
{

    /**
     * 一覧取得
     * @return Collection<Players> 一覧
     */
    public function getAll(): Collection
    {
        // 一覧取得
        return self::makeQueryBuilder()->get();
    }

    /**
     * 指定検索条件の検索実行
     * @param array $condition 検索条件
     * @return Collection 検索結果
     */
    public function findBy(array $condition): Collection
    {
        // 指定検索条件に合致する 一覧検索
        return self::makeQueryBuilder($condition)->get();
    }

    /**
     * 新規登録実行
     * @param array $input 登録値
     * @return Players 登録結果
     */
    public function create(array $input): Players
    {
        // 新規登録実行
        return Players::create($input);
    }

    /**
     * 検索 Builder生成
     * @param array<string, mixed>|null $conditions 検索条件
     * @return Builder 検索Builder
     */
    private static function makeQueryBuilder(?array $conditions = []): Builder
    {
        // 共通条件
        $query = Players::with(['belongTeam']);
        // 指定検索条件 同一 where 項目(key) = value
        foreach ($conditions as $key => $value) $query->where($key, $value);
        // 結果
        return $query;
    }
}
