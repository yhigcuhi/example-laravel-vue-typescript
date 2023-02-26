<?php

namespace App\Http\Controllers;

use App\Exceptions\InternalServerException;
use App\Exceptions\MyHttpException;
use App\Http\Requests\CreatePlayerRequest;
use App\Services\PlayerScheduleService;
use App\Services\PlayerService;
use App\ValueObjects\PlayerId;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

/**
 * 選手コントローラー
 */
final class PlayerController extends Controller
{
    /* 利用サービス一覧 */
    private PlayerService $service; // メイン = 選手サービス
    private PlayerScheduleService $playerScheduleService; // 選手予定 サービス

    /**
     * コンストラクタ
     * @param PlayerService $service
     * @param PlayerScheduleService $playerScheduleService
     */
    public function __construct(PlayerService $service, PlayerScheduleService $playerScheduleService)
    {
        $this->service = $service;
        $this->playerScheduleService = $playerScheduleService;
    }

    /**
     * API 選手一覧
     * @return JsonResponse 結果
     */
    public final function list(): JsonResponse
    {

        // 選手一覧 取得
        return response()->json($this->service->getAll());
    }

    /**
     * 選手登録
     * @param CreatePlayerRequest $request 登録リクエスト
     * @return JsonResponse 結果
     */
    public final function post(CreatePlayerRequest $request): JsonResponse
    {
        // バリデーション
        $validate = $request->validated();
        // 選手登録実行
        try {
            // トランザクション開始
            DB::beginTransaction();
            // 選手登録実行
            $result = $this->service->create($validate);
            // コミット
            DB::commit();
            // 結果返却
            return response()->json($result);
        // エラー
        } catch (MyHttpException $e) { // 独自例外
            // エラーハンドリグ
            DB::rollBack(); // ロールバック
            Log::error($e->getMessage()); // エラーログ
            throw $e; // そのまま
        } catch (Throwable $e) { // その他
            // エラーハンドリグ
            DB::rollBack(); // ロールバック
            Log::error($e->getMessage()); // エラーログ
            throw new InternalServerException($e->getMessage(), null, $e);
        }
    }

    /**
     * API 指定選手の 選手予定 一覧
     * @param int $id 指定選手ID
     * @param Request $request 検索条件リクエスト
     * @return JsonResponse 結果
     */
    public final function schedules(int $id, Request $request): JsonResponse
    {
        // 指定選手の選手予定一覧 取得 TODO: 検索条件クエリは今後
        return response()->json($this->playerScheduleService->findByPlayerId(PlayerId::of($id)));
    }

}
