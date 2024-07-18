import { z } from 'zod';

export const teaserLegLegBetType = z.enum(['SPREAD', 'TOTAL_POINTS']);

export type TeaserLegLegBetType = z.infer<typeof teaserLegLegBetType>;
