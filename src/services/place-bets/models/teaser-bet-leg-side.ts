import { z } from 'zod';

export const teaserBetLegSide = z.enum(['OVER', 'UNDER']);

export type TeaserBetLegSide = z.infer<typeof teaserBetLegSide>;
