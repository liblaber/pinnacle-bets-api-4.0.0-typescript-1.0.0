import { z } from 'zod';

export const straightBetV4BetType = z.enum([
  'MONEYLINE',
  'TEAM_TOTAL_POINTS',
  'SPREAD',
  'TOTAL_POINTS',
  'SPECIAL',
  'PARLAY',
  'TEASER',
  'MANUAL',
]);

export type StraightBetV4BetType = z.infer<typeof straightBetV4BetType>;
