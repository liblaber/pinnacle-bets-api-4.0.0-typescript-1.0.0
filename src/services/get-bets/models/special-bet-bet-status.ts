import { z } from 'zod';

export const specialBetBetStatus = z.enum(['ACCEPTED', 'CANCELLED', 'LOSE', 'REFUNDED', 'WON']);

export type SpecialBetBetStatus = z.infer<typeof specialBetBetStatus>;
