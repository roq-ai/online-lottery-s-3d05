import { OperatorInterface } from 'interfaces/operator';
import { GetQueryInterface } from 'interfaces';

export interface LotteryGameInterface {
  id?: string;
  operator_id: string;
  name?: string;
  description?: string;
  jackpot?: number;
  draw_date?: any;
  draw_time?: any;
  status?: string;
  created_at?: any;
  updated_at?: any;

  operator?: OperatorInterface;
  _count?: {};
}

export interface LotteryGameGetQueryInterface extends GetQueryInterface {
  id?: string;
  operator_id?: string;
  name?: string;
  description?: string;
  status?: string;
}
