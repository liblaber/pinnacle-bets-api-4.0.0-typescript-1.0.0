import { z } from 'zod';

export const straightBetV4BetStatus = z.enum([
  'ACCEPTED',
  'CANCELLED',
  'LOST',
  'PENDING_ACCEPTANCE',
  'REFUNDED',
  'PUSHED',
  'NOT_ACCEPTED',
  'WON',
  'HALF_WON_HALF_PUSHED',
  'HALF_LOST_HALF_PUSHED',
]);

export type StraightBetV4BetStatus = z.infer<typeof straightBetV4BetStatus>;
