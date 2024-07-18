import { z } from 'zod';

export const manualBetBetStatus = z.enum(['ACCEPTED', 'CANCELLED', 'LOSE', 'REFUNDED', 'WON']);

export type ManualBetBetStatus = z.infer<typeof manualBetBetStatus>;
