import { z } from 'zod';

export const parlayLegSide = z.enum(['OVER', 'UNDER']);

export type ParlayLegSide = z.infer<typeof parlayLegSide>;
