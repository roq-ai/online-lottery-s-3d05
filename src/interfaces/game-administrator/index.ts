import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GameAdministratorInterface {
  id?: string;
  user_id: string;
  first_name?: string;
  last_name?: string;
  hire_date?: any;
  role?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GameAdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  status?: string;
}
