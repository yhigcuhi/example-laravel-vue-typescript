/* import client*/
import MyAxios from '@/lib/MyAxios';
/* for types*/
import {PlayerEntity} from '../types';

/* 内部利用定数*/
// ベースURL
const BASE_URL = '/players';

/* export API*/
/**
 * 選手一覧取得
 * @returns {Promise<AxiosResponse<PlayerEntity[]>>} 一覧
 */
export const getPlayers = () => MyAxios.get<PlayerEntity[]>(BASE_URL);

