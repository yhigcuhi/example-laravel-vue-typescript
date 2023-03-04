/* import client*/
import MyAxios from '@/lib/MyAxios';
/* for types*/
import {PlayerEntity} from '../types';
import {AxiosResponse} from 'axios';

/* 内部利用定数*/
// ベースURL
const BASE_URL = '/players';

/* export API*/
/**
 * 選手登録
 * @param {object} data 登録値
 * @returns {Promise<AxiosResponse<PlayerEntity>>} 登録結果
 */
export const createPlayer = (data: object) => MyAxios.post<PlayerEntity>(BASE_URL, data);

