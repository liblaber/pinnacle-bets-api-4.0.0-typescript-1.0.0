import { z } from 'zod';

export const parlayBetBetStatus = z.enum([
  'ACCEPTED',
  'CANCELLED',
  'LOST',
  'PENDING_ACCEPTANCE',
  'REFUNDED',
  'NOT_ACCEPTED',
  'WON',
  'PARTIAL_WON',
  'PARTIAL_LOST',
]);

export type ParlayBetBetStatus = z.infer<typeof parlayBetBetStatus>;
