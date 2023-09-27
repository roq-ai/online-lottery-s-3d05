import axios from 'axios';
import queryString from 'query-string';
import { OperatorInterface, OperatorGetQueryInterface } from 'interfaces/operator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOperators = async (
  query?: OperatorGetQueryInterface,
): Promise<PaginatedInterface<OperatorInterface>> => {
  const response = await axios.get('/api/operators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOperator = async (operator: OperatorInterface) => {
  const response = await axios.post('/api/operators', operator);
  return response.data;
};

export const updateOperatorById = async (id: string, operator: OperatorInterface) => {
  const response = await axios.put(`/api/operators/${id}`, operator);
  return response.data;
};

export const getOperatorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/operators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOperatorById = async (id: string) => {
  const response = await axios.delete(`/api/operators/${id}`);
  return response.data;
};
