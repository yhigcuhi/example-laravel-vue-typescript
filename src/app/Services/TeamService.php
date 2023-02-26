<?php

namespace App\Services;

use App\Models\Players;
use App\Models\Teams;
use App\Repositories\PlayerRepository;
use App\Repositories\TeamRepository;
use Illuminate\Support\Collection;

/**
 * チームサービス
 */
class TeamService
{
    /* 利用リポジトリ */
    private TeamRepository $repository; // メイン リポジトリ

    /**
     * @param TeamRepository $repository
     */
    public function __construct(TeamRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * チーム一覧取得
     * @return Collection<Teams> 結果
     */
    public function getAll(): Collection
    {
        return $this->repository->getAll();
    }

    /**
     * 指定キー検索
     * @param string $team_cd 検索キー
     * @return Teams|null 検索結果
     */
    public function findById(string $team_cd): ?Teams
    {
        return $this->repository->findById($team_cd);
    }
}
