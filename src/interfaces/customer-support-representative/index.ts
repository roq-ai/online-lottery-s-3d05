import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerSupportRepresentativeInterface {
  id?: string;
  user_id: string;
  first_name?: string;
  last_name?: string;
  hire_date?: any;
  department?: string;
  position?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerSupportRepresentativeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  first_name?: string;
  last_name?: string;
  department?: string;
  position?: string;
}
