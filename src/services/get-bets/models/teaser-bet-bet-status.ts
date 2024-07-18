import { z } from 'zod';

export const teaserBetBetStatus = z.enum(['ACCEPTED', 'CANCELLED', 'LOSE', 'REFUNDED', 'WON']);

export type TeaserBetBetStatus = z.infer<typeof teaserBetBetStatus>;
