import { z } from 'zod';

export const teaserBetLegBetType = z.enum(['SPREAD', 'TOTAL_POINTS']);

export type TeaserBetLegBetType = z.infer<typeof teaserBetLegBetType>;
