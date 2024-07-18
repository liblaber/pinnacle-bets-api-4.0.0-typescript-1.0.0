import { z } from 'zod';

export const betStatuses = z.enum([
  'WON',
  'LOSE',
  'CANCELLED',
  'REFUNDED',
  'NOT_ACCEPTED',
  'ACCEPTED',
  'PENDING_ACCEPTANCE',
]);

export type BetStatuses = z.infer<typeof betStatuses>;
