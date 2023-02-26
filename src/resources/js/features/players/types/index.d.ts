/* for types */
import {BaseEntity} from '@/@types';
import {Gender} from '../enums/Gender';
import {TeamEntity} from '@/features/teams/types';

// 選手エンティティ
export type PlayerEntity = {
    readonly last_name: string // 名前（姓）
    readonly first_name: string // 名前（名）
    readonly last_name_kana: string // ふりがな（姓）
    readonly first_name_kana: string  // ふりがな（名）
    readonly belong_team_cd: string // 所属チームコード
    readonly gender: Gender // 性別
    readonly belong_team: TeamEntity // 所属チーム
} & BaseEntity
