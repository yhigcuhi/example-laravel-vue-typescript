
<script setup lang="ts">
/* import 部品*/
import {Form} from '@/components/form';
import {Label} from '@/components/elements';
import {InputPlayerName, InputPlayerNameKana, GenderRadio} from './form';
import {TeamSelectBox} from '@/features/teams';
</script>
<template>
    <!-- 選手登録フォーム -->
    <Form>
        <!-- フォーム:名前 -->
        <div>
            <Label class="col-12">名前</Label>
            <div class="d-flex align-items-center">
                <!-- 名前（姓） -->
                <InputPlayerName name="last_name" outer-class="col-6"/>
                <!-- 名前（名） -->
                <InputPlayerName name="first_name" outer-class="col-6 ml-3"/>
            </div>
        </div>
        <!-- フォーム:かな -->
        <div>
            <Label class="col-12">かな</Label>
            <div class="d-flex align-items-center">
                <!-- ふりがな（姓） -->
                <InputPlayerNameKana name="last_name_kana" outer-class="col-6"/>
                <!-- ふりがな（名） -->
                <InputPlayerNameKana name="last_name_kana" outer-class="col-6 ml-3"/>
            </div>
        </div>
        <!-- 所属チーム -->
        <div>
            <Label class="col-12">所属チーム</Label>
            <div style="padding-left: 15px">
                <TeamSelectBox />
            </div>
        </div>
        <!-- 性別 -->
        <div>
            <Label class="col-12">性別</Label>
            <GenderRadio outer-class="col-12" />
        </div>
    </Form>
</template>
