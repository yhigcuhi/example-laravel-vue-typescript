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
 * 選手一覧取得
 * @returns {Promise<AxiosResponse<Response>>} 一覧
 */
type Response = PlayerEntity[];
export const getPlayers = (): Promise<AxiosResponse<Response>> => MyAxios.get(BASE_URL);

