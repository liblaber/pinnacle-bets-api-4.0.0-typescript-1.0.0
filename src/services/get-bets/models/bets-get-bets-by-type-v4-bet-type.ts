import { z } from 'zod';

export const betsGetBetsByTypeV4BetType = z.enum([
  'SPREAD',
  'MONEYLINE',
  'TOTAL_POINTS',
  'TEAM_TOTAL_POINTS',
  'SPECIAL',
  'PARLAY',
  'TEASER',
  'MANUAL',
]);

export type BetsGetBetsByTypeV4BetType = z.infer<typeof betsGetBetsByTypeV4BetType>;
