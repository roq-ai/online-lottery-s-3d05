import axios from 'axios';
import queryString from 'query-string';
import { LotteryGameInterface, LotteryGameGetQueryInterface } from 'interfaces/lottery-game';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLotteryGames = async (
  query?: LotteryGameGetQueryInterface,
): Promise<PaginatedInterface<LotteryGameInterface>> => {
  const response = await axios.get('/api/lottery-games', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLotteryGame = async (lotteryGame: LotteryGameInterface) => {
  const response = await axios.post('/api/lottery-games', lotteryGame);
  return response.data;
};

export const updateLotteryGameById = async (id: string, lotteryGame: LotteryGameInterface) => {
  const response = await axios.put(`/api/lottery-games/${id}`, lotteryGame);
  return response.data;
};

export const getLotteryGameById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/lottery-games/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLotteryGameById = async (id: string) => {
  const response = await axios.delete(`/api/lottery-games/${id}`);
  return response.data;
};
