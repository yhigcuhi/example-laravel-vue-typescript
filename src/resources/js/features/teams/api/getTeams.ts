/* import client*/
import MyAxios from '@/lib/MyAxios';
/* for types*/
import {TeamEntity} from '../types';
import {AxiosResponse} from 'axios';

/* 内部利用定数*/
// ベースURL
const BASE_URL = '/teams';

/* export API*/
/**
 * チーム一覧取得
 * @returns {Promise<AxiosResponse<Response>>} 一覧
 */
type Response = TeamEntity[];
export const getTeams = (): Promise<AxiosResponse<Response>> => MyAxios.get(BASE_URL);

