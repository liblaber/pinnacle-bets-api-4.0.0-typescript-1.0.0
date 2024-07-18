import { z } from 'zod';

export const parlayLegLegBetStatus = z.enum([
  'CANCELLED',
  'LOST',
  'PUSHED',
  'REFUNDED',
  'WON',
  'ACCEPTED',
  'HALF_WON_HALF_PUSHED',
  'HALF_LOST_HALF_PUSHED',
]);

export type ParlayLegLegBetStatus = z.infer<typeof parlayLegLegBetStatus>;
