
<script setup lang="ts">
/* import 部品*/
import {Form} from '@/components/form'; // フォーム部品
import {Label} from '@/components/elements'; // 部品
import {InputPlayerName, InputPlayerNameKana, GenderRadio} from './form'; // 特有のフォーム部品
import {TeamSelectBox} from '@/features/teams';
import {Gender} from '../enums/Gender';

// 画面表示引数 = フォーム初期値
type Props = {
    last_name?: string|null
    first_name?: string|null
    last_name_kana?: string|null
    first_name_kana?: string|null
    belong_team_cd?: string|null
    gender?: Gender|null
}
const props = defineProps<Props>();
</script>
<template>
    <!-- 選手登録フォーム -->
    <Form submit-label="選手を追加する" :value="props">
        <!-- フォーム:名前 -->
        <div>
            <Label class="col-12">名前</Label>
            <div class="d-flex align-items-center">
                <!-- 名前（姓） -->
                <InputPlayerName name="last_name" outer-class="col-6" validation-label="名前（姓）"/>
                <!-- 名前（名） -->
                <InputPlayerName name="first_name" outer-class="col-6 ml-3" validation-label="名前（名）"/>
            </div>
        </div>
        <!-- フォーム:かな -->
        <div>
            <Label class="col-12">かな</Label>
            <div class="d-flex align-items-center">
                <!-- ふりがな（姓） -->
                <InputPlayerNameKana name="last_name_kana" outer-class="col-6" validation-label="ふりがな（姓）"/>
                <!-- ふりがな（名） -->
                <InputPlayerNameKana name="first_name_kana" outer-class="col-6 ml-3" validation-label="ふりがな（名）"/>
            </div>
        </div>
        <!-- 所属チーム -->
        <div>
            <TeamSelectBox label="所属チーム" name="belong_team_cd" outer-class="col-12 pr-0" :use-validation="true"/>
        </div>
        <!-- 性別 -->
        <div>
            <Label class="col-12">性別</Label>
            <GenderRadio name="gender" outer-class="col-12" validation-label="性別"/>
        </div>
    </Form>
</template>
