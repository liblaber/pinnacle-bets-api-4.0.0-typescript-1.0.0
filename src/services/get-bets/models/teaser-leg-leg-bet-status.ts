import { z } from 'zod';

export const teaserLegLegBetStatus = z.enum(['CANCELLED', 'LOST', 'PUSHED', 'REFUNDED', 'WON']);

export type TeaserLegLegBetStatus = z.infer<typeof teaserLegLegBetStatus>;
