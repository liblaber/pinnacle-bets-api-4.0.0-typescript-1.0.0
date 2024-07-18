import { z } from 'zod';

export const teaserLegSide = z.enum(['OVER', 'UNDER']);

export type TeaserLegSide = z.infer<typeof teaserLegSide>;
