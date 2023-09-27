const mapping: Record<string, string> = {
  customers: 'customer',
  'customer-support-representatives': 'customer_support_representative',
  'game-administrators': 'game_administrator',
  'lottery-games': 'lottery_game',
  operators: 'operator',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
