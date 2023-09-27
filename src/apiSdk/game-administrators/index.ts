import axios from 'axios';
import queryString from 'query-string';
import { GameAdministratorInterface, GameAdministratorGetQueryInterface } from 'interfaces/game-administrator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGameAdministrators = async (
  query?: GameAdministratorGetQueryInterface,
): Promise<PaginatedInterface<GameAdministratorInterface>> => {
  const response = await axios.get('/api/game-administrators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGameAdministrator = async (gameAdministrator: GameAdministratorInterface) => {
  const response = await axios.post('/api/game-administrators', gameAdministrator);
  return response.data;
};

export const updateGameAdministratorById = async (id: string, gameAdministrator: GameAdministratorInterface) => {
  const response = await axios.put(`/api/game-administrators/${id}`, gameAdministrator);
  return response.data;
};

export const getGameAdministratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/game-administrators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGameAdministratorById = async (id: string) => {
  const response = await axios.delete(`/api/game-administrators/${id}`);
  return response.data;
};
