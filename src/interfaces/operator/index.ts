import { LotteryGameInterface } from 'interfaces/lottery-game';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OperatorInterface {
  id?: string;
  description?: string;
  established_date?: any;
  headquarters?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  lottery_game?: LotteryGameInterface[];
  user?: UserInterface;
  _count?: {
    lottery_game?: number;
  };
}

export interface OperatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  headquarters?: string;
  website?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
