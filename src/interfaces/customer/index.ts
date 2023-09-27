import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  first_name?: string;
  last_name?: string;
  date_of_birth?: any;
  address?: string;
  city?: string;
  country?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  city?: string;
  country?: string;
}
