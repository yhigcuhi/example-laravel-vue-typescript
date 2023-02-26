<?php

namespace App\Services;

use App\Exceptions\BadRequestException;
use App\Exceptions\ConflictException;
use App\Exceptions\MyHttpException;
use App\Models\Players;
use App\Models\Teams;
use App\Repositories\PlayerRepository;
use Illuminate\Support\Collection;

/**
 * 選手サービス
 */
class PlayerService
{
    /* 利用リポジトリ */
    private PlayerRepository $repository; // メイン = 選手リポジトリ
    private TeamService $teamService; // チームサービス

    /**
     * コンストラクタs
     * @param PlayerRepository $repository
     * @param TeamService $teamService
     */
    public function __construct(PlayerRepository $repository, TeamService $teamService)
    {
        $this->repository = $repository;
        $this->teamService = $teamService;
    }


    /**
     * 選手一覧取得
     * @return Collection<Players> 結果
     */
    public function getAll(): Collection
    {
        return $this->repository->getAll();
    }

    /**
     * 選手登録
     * @param array $input 入力値
     * @return Players 登録結果
     * @throws MyHttpException 独自例外
     */
    public function create(array $input): Players
    {
        // 前提条件
        if (empty($input)) throw new BadRequestException('選手登録値の形が不正です.');
        if (is_null($this->findTeamByTeamCd($input['belong_team_cd']))) throw new BadRequestException('存在しないチームです.', 'belong_team_cd');
        if (!is_null($this->findByUnique($input['last_name'], $input['first_name'], $input['belong_team_cd'])))  throw new ConflictException('すでにチームに存在する選手です.');// 重複チェック

        // 新規登録実行
        return $this->repository->create($input);
    }

    /**
     * チーム検索
     * @param string $belong_team_cd 所属チームコード
     * @return Teams|null 検索結果
     */
    private function findTeamByTeamCd(string $belong_team_cd): ?Teams
    {
        return $this->teamService->findById($belong_team_cd);
    }

    /**
     * 一意の値で検索実行
     * @param string $last_name 名前(姓)
     * @param string $first_name 名前(名)
     * @param string $belong_team_cd 所属チームコード
     * @return Players|null 検索結果
     */
    private function findByUnique(string $last_name, string $first_name, string $belong_team_cd): ?Players
    {
        // 検索実行
        $players = $this->repository->findBy(['last_name' => $last_name, 'first_name' => $first_name, 'belong_team_cd' => $belong_team_cd]);
        // はじめに見つかる値
        return $players->first();
    }
}
